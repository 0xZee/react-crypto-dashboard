import React from "react";

export default function Header() {
  return (
    <div className="  flex justify-between mb-4 text-center text-yellow-500">
      <div className="border-t border-yellow-500 w-24 rounded bg-black">
        0xZee
      </div>
      <buton className="border-t border-yellow-500 w-24 rounded bg-black hover:bg-yellow-700 hover:text-gray-200">
        Connect W3
      </buton>
    </div>
  );
}
