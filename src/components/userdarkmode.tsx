// useDarkMode.tsx

import { useState, useEffect } from 'react';

// Define o tipo de retorno estrito para o TypeScript
type UseDarkModeReturn = [boolean, () => void];

function useDarkMode(): UseDarkModeReturn {
    
    // 1. Lógica de Inicialização
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        // Tenta ler a preferência salva
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // Verifica a preferência do sistema operacional
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // 2. Lógica para o useEffect
    useEffect(() => {
        const root = window.document.documentElement; 

        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    // 3. Função Toggle (tipo: () => void)
    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    // 4. Retorno explícito no formato de tupla
    return [isDarkMode, toggleDarkMode] as UseDarkModeReturn;
    // O 'as UseDarkModeReturn' força a tupla para o TypeScript
}

export default useDarkMode;