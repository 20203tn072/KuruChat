import React, { useState } from "react";
import AddFriendModal from "./AddFriendModal"

const NavbarHeader = ({ activeComponent }) => {

    const [isModalOpenFriend, setIsModalOpenFriend] = useState(false);


    return (
        <div className="grid-rows-2 items-center justify-between p-3  border-b border-amber-500">
            <div className="row-start-1 mt-2 mb-3">
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="text-4xl text-gray-900 font-bold">{activeComponent}</h2>
                    </div>
                    {activeComponent === "Chats" && (
                        <div className="flex justify-end">
                            <button type="button" onClick={() => setIsModalOpenFriend(true)} className="p-2 rounded-full transition duration-300 cursor-pointer hover:bg-gray-100 hover:text-black">
                                <span className="material-symbols-outlined text-white text-2xl">add_comment</span>
                            </button>
                        </div>
                    )}
                </div>

            </div>

            <div className=" mb-2 mt-3">
                <form class="max-w-md mx-auto ">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <span class="material-symbols-outlined text-black">
                                search
                            </span>
                        </div>
                        <input type="search" id="default-search" class="block  w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 " placeholder="Buscar  " required />
                    </div>
                </form>
            </div>
            <AddFriendModal isOpen={isModalOpenFriend} onClose={() => setIsModalOpenFriend(false)} />
        </div>
    );
};

export default NavbarHeader;
