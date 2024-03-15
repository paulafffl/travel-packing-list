import { useContext, useState } from 'react';
import { ItemsContext } from '../context';
import toast, { Toaster } from 'react-hot-toast';
import Icon from './Icon';
import {
  listCamping,
  listClothes,
  listEssentials,
  listFood,
  listReadyToGo,
  listSummer,
  listTech,
  listToiletries,
  listWinter,
  listZeroWaste,
} from '../lib/lists';

const AddItem = () => {
  const { addItem } = useContext(ItemsContext);
  const [newItem, setNewItem] = useState('');

  const existingInList = () => {
    const lists = {
      listCamping,
      listClothes,
      listEssentials,
      listFood,
      listReadyToGo,
      listSummer,
      listTech,
      listToiletries,
      listWinter,
      listZeroWaste,
    };

    for (const [listName, list] of Object.entries(lists)) {
      const match = list.find((item) => {
        const trimmedInput = newItem.trim().toLowerCase();
        return item.trim().toLowerCase().includes(trimmedInput);
      });
      if (match) {
        const listNAME = listName.substring(4).toUpperCase(); // Name of the array without "list"
        toast(
          `👋 This already exists in ${listNAME}. \n➕\u00A0Add the  list to see it and more! 👀`,
          {
            position: 'bottom-center',
          },
        );
        return listNAME;
      }
    }
    return false;
  };

  return (
    <form
      id="new-item"
      className="flex flex-col sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        if (!existingInList()) {
          addItem(newItem);
          setNewItem('');
        }
      }}
    >
      <Toaster />
      <input
        id="new-item-name"
        className="mb-2 flex-grow sm:mb-0 sm:mr-2"
        type="search"
        placeholder="New Item"
        value={newItem}
        autoFocus
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        id="new-item-submit"
        aria-label={`Add Item ${newItem}`}
        type="submit"
        disabled={!newItem}
      >
        <Icon symbol="add" />
        <span className="ml-1">Add</span>
      </button>
    </form>
  );
};

export default AddItem;
