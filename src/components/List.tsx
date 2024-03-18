import { useContext } from 'react';
import { ItemsContext } from '../context';
import Item from './Item';
import Icon from './Icon';

type ItemsProps = {
  items: Item[];
  title: string;
};

const List = ({ title, items }: ItemsProps) => {
  const { packAllItems, unpackAllItems, totalItems } = useContext(ItemsContext);
  const packed = title === 'Packed Items';
  const message = () => {
    let messageDisplayed = '';
    if (packed) {
      messageDisplayed = '🎒 Tick off items to see them here';
    }
    if (!packed) {
      messageDisplayed =
        totalItems > 0
          ? "👜 All packed, you're ready for your next travel! 🙌"
          : '📝 Start a checklist from items above';
    }
    return messageDisplayed;
  };
  return (
    <section className="section-list w-full">
      <h2>
        {title}
        {totalItems > 0 && (
          <span className="lowercase text-slate-400">{` ( ${items.length} out of ${totalItems} )`}</span>
        )}
      </h2>
      <ul className="flex flex-col">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      {items.length === 0 ? (
        <p className="mt-0 text-slate-500 sm:mt-2">{message()}</p>
      ) : (
        <button
          className="my-4 mb-0 w-full sm:mb-2"
          onClick={() => (packed ? unpackAllItems() : packAllItems())}
        >
          <Icon symbol={packed ? 'upload' : 'download'} />
          <span className="ml-1">{packed ? 'Unpack all items' : 'Pack all items'}</span>
        </button>
      )}
    </section>
  );
};

export default List;
