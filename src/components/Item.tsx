import clsx from 'clsx';
import { useContext, useState } from 'react';
import { ItemsContext } from '../context';

type ItemProps = {
  item: Item;
};

const Item = ({ item }: ItemProps) => {
  const [editing, setEditing] = useState(false);
  const { update, remove } = useContext(ItemsContext);

  return (
    <li className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={item.packed}
        id={`checkbox-item-${item.id}`}
        onChange={() => update(item.id, { packed: !item.packed })}
      />
      <label
        htmlFor={`checkbox-item-${item.id}`}
        className={clsx({ hidden: editing })}
      >
        {item.name}
      </label>
      <input
        value={item.name}
        id={`checkbox-editing-${item.id}`}
        className={clsx({ hidden: !editing })}
        onChange={(event) => update(item.id, { name: event.target.value })}
      />
      <div className="g'py-0 text-sm', ap-2 ml-auto flex">
        <button
          className="ml-2 px-2 py-1 text-xs"
          aria-label={`Edit "${item.name}"`}
          onClick={() => setEditing(!editing)}
        >
          {editing ? 'Save' : 'Rename'}
        </button>
        <button
          className="ml-2 px-2 py-1 text-xs"
          aria-label={`Delete "${item.name}"`}
          onClick={() => remove(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Item;
