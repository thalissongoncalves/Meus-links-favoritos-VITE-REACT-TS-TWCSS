import { useState } from "react"
import Swal from 'sweetalert2'

export interface ILinkInfo {
    title: string;
    url: string;
    description: string;
}

interface ILinks {
    links: ILinkInfo[];
    setLinks: React.Dispatch<React.SetStateAction<ILinkInfo[]>>;
}

export function Form({ links, setLinks }: ILinks) {
    const [linkInfo, setLinkInfo] = useState({
        title: '',
        url: '',
        description: ''
    });

    function isValidUrl(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }

    function handleChange(e: any) {
        const { name, value } = e.target;
        setLinkInfo({
            ...linkInfo,
            [name]: value,
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!isValidUrl(linkInfo.url)) {
            Swal.fire({
                title: 'Error!',
                text: 'URL inválida! Digite uma URL no formato http:// ou https://',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
            return;
        }

        setLinks([
            linkInfo,
            ...links,
        ]);

        setLinkInfo({
            title: '',
            url: '',
            description: ''
        });
    }

    return (
        <div className='bg-white p-7 rounded-xl shadow-xl'>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 -960 960 960" width="1.5em" fill="#0000F5"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                <h2 className='text-2xl font-bold'>&nbsp;Adicionar Novo Link</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='flex flex-col sm:flex-row gap-4 mt-5'>
                    <label className='flex-1'>
                        <p className='font-medium'>Título *</p>
                        <input placeholder='Ex: GitHub, LinkedIn, Portfolio...' className='w-full border-1 px-3 py-2 rounded-md my-2 border-[#E5E7EB]' name="title" value={linkInfo?.title} onChange={handleChange} type="text" required />
                    </label>
                    <label className='flex-1'>
                        <p className='font-medium'>URL *</p>
                        <input placeholder='https://exemplo.com' className='w-full border-1 px-3 py-2 rounded-md my-2  border-[#E5E7EB]' name="url" value={linkInfo?.url} onChange={handleChange} type="text" required />
                    </label>
                </div>

                <div className='mt-4'>
                    <label className='w-full'>
                        <p className='font-medium'>Descrição</p>
                        <textarea placeholder='Breve descrição do link (opcional)' className='w-full border-1 px-3 py-2 rounded-md my-2 border-[#E5E7EB]' name="description" value={linkInfo?.description} onChange={handleChange} />
                    </label>
                </div>

                <button className='flex items-center bg-blue-600 text-white px-5 py-2 rounded-md mt-2 cursor-pointer' type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 -960 960 960" width="1.2em" fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                    &nbsp; Adicionar Link
                </button>
            </form>
        </div>
    )
}