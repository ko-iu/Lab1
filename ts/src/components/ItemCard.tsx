import React from "react";

interface ItemCardProps {
  title: string;
  description: string;
  price: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ title, description, price }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold text-purple-400">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-green-400 font-bold mt-2">{price} ₽</p>
    </div>
  );
};

export default ItemCard;