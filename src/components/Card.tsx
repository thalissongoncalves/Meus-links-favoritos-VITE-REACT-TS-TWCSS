import { useState } from "react";
import type { ILinkInfo } from "./Form";

interface ICard {
    title: string;
    url: string;
    description: string;
    links: ILinkInfo[];
    setLinks: React.Dispatch<React.SetStateAction<ILinkInfo[]>>;
}

export function Card({title, url, description, links, setLinks}: ICard) {
    const [descriptionDisplay, setDescriptionDisplay] = useState(false);

    function handleDelete(e: any) {
        e.preventDefault();
        const newLinks = links.filter(item => item.url !== url);
        setLinks(newLinks)
    }

    return (
        <div className='mt-5 bg-white p-7 rounded-xl shadow-sm'>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                
                <div className='flex items-start flex-col'>
                    <h3 className='font-semibold text-lg'>{title}</h3>
                    <div className='bg-blue-100 flex text-center rounded-4xl p-2 my-1 me-2'>
                        <p className='font-semibold text-blue-600 text-sm w-full break-all'>{url}</p>
                    </div>
                </div>

                <div className="flex items-start justify-end flex-wrap gap-2">
                    {description !== "" && (descriptionDisplay ? (
                        <button className="hover:bg-blue-100 p-2 rounded-md cursor-pointer" onClick={() => setDescriptionDisplay(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960" width="1.2em" fill="#434343"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" /></svg>
                        </button>
                    ) : (
                        <button className="hover:bg-blue-100 p-2 rounded-md cursor-pointer" onClick={() => setDescriptionDisplay(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960" width="1.2em" fill="#434343"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                        </button>
                    ))}
                    <a href={url} target="_blank" className="hover:bg-green-100 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960" width="1.2em" fill="#434343"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
                    </a>
                    <button className="hover:bg-red-100 p-2 rounded-md cursor-pointer" onClick={handleDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960" width="1.2em" fill="#434343"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                    </button>
                </div>
            </div>

            {(descriptionDisplay && description !== "") && (
                <div className='bg-[#F9FAFB] p-3 rounded-lg border-s-5 border-blue-600 mt-2'>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}