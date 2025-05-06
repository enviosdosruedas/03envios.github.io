import os

def listar_archivos():
    # Definir las rutas
    ruta_sections = os.path.join('src', 'components', 'sections')
    ruta_salida = 'lista_archivos.txt'
    
    try:
        # Verificar si el directorio existe
        if not os.path.exists(ruta_sections):
            print(f"Error: El directorio {ruta_sections} no existe")
            return
        
        # Obtener la lista de archivos
        archivos = os.listdir(ruta_sections)
        
        # Escribir los archivos en el txt
        with open(ruta_salida, 'w', encoding='utf-8') as f:
            f.write("Archivos en la carpeta sections:\n")
            f.write("============================\n\n")
            
            for i, archivo in enumerate(archivos, 1):
                f.write(f"{i}. {archivo}\n")
                
        print(f"Se ha creado el archivo {ruta_salida} con éxito")
        
    except Exception as e:
        print(f"Error al procesar los archivos: {str(e)}")

if __name__ == '__main__':
    listar_archivos()