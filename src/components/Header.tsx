export function Header() {
    return (
        <div className="flex flex-col items-center text-center px-4">
            <div className="shadow-xl flex justify-center items-center w-16 h-16 bg-blue-700 rounded-4xl mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 -960 960 960" width="3em" fill="#FFFFFF"><path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" /></svg>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-3 text-center">Meus Links Favoritos</h1>
            <p className="text-base sm:text-xl font-light max-w-xl text-center mb-5">
                Organize e gerencie seus links importantes em um só lugar. Adicione títulos, URLs e descrições para manter tudo organizado.
            </p>
        </div>
    )
}