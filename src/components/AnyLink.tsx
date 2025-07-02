export function AnyLink() {
    return (
        <div className='mt-10 mb-10 flex flex-col justify-center items-center px-4'>
            <div className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 bg-[#F3F4F6] rounded-full mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 -960 960 960" width="3em" fill="#9CA3AF"><path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" /></svg>
            </div>
            <p className='font-semibold text-lg sm:text-xl mb-2'>Nenhum link ainda</p>
            <p className="text-center text-sm">Adicione seu primeiro link usando o formulário acima!</p>
        </div>
    )
}