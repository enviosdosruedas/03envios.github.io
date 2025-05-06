import os
import re

def crear_componente_react(nombre_archivo):
    # Convertir el nombre del archivo a un nombre de componente React
    nombre_componente = re.sub(r'[-.]', ' ', nombre_archivo.replace('.tsx', '')).title().replace(' ', '')
    
    return f'''import React from 'react';

export default function {nombre_componente}() {{
    return (
        <div>
            {{/* Componente {nombre_componente} */}}
        </div>
    );
}}'''

def crear_archivos():
    # Definir la ruta base
    base_path = os.path.join('src', 'components', 'sections')
    
    # Lista de archivos a crear desde el archivo de texto
    archivos = []
    try:
        with open('src/lista_archivos.txt', 'r', encoding='utf-8') as f:
            lines = f.readlines()
            for line in lines:
                if line.strip() and line[0].isdigit():
                    # Extraer el nombre del archivo de la línea numerada
                    archivo = line.split('. ')[1].strip()
                    archivos.append(archivo)
    except Exception as e:
        print(f"Error al leer el archivo lista_archivos.txt: {str(e)}")
        return

    # Crear el directorio si no existe
    os.makedirs(base_path, exist_ok=True)

    # Crear cada archivo con su contenido
    for nombre_archivo in archivos:
        ruta_completa = os.path.join(base_path, nombre_archivo)
        
        # Verificar si el archivo ya existe
        if not os.path.exists(ruta_completa):
            try:
                with open(ruta_completa, 'w', encoding='utf-8') as f:
                    contenido = crear_componente_react(nombre_archivo)
                    f.write(contenido)
                print(f'Archivo creado: {nombre_archivo}')
            except Exception as e:
                print(f'Error al crear {nombre_archivo}: {str(e)}')
        else:
            print(f'El archivo {nombre_archivo} ya existe')

if __name__ == '__main__':
    crear_archivos()