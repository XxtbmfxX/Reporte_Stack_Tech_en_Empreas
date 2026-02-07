#!/bin/bash
# Script para gestionar PDFs en Vercel Blob Storage
# Uso: ./scripts/manage-blobs.sh [comando] [archivo]

set -e

BLOB_BASE_URL="https://kw9lfumcncnepibk.public.blob.vercel-storage.com"
BLOB_TOKEN="${BLOB_READ_WRITE_TOKEN}"

if [ -z "$BLOB_TOKEN" ]; then
    echo "❌ Error: BLOB_READ_WRITE_TOKEN no está configurado"
    echo "   Configura la variable de entorno o carga desde .env.local"
    exit 1
fi

case "$1" in
    list)
        echo "📋 PDFs en Vercel Blob:"
        echo "   URL base: $BLOB_BASE_URL"
        echo ""
        echo "   Archivos esperados:"
        grep -o "'[^']*':" src/config/pdfs.ts | sed 's/:$//' | sed 's/^/     - /'
        ;;
    
    upload)
        if [ -z "$2" ]; then
            echo "❌ Error: especifica el archivo"
            echo "Uso: ./scripts/manage-blobs.sh upload <archivo>"
            exit 1
        fi
        
        FILE="$2"
        if [ ! -f "$FILE" ]; then
            echo "❌ Error: archivo no encontrado: $FILE"
            exit 1
        fi
        
        echo "⬆️  Subiendo $FILE al Blob..."
        npx @vercel/blob upload "$FILE" --token "$BLOB_TOKEN"
        echo "✅ Archivo subido correctamente"
        ;;
    
    delete)
        if [ -z "$2" ]; then
            echo "❌ Error: especifica el nombre del archivo"
            echo "Uso: ./scripts/manage-blobs.sh delete <nombre>"
            exit 1
        fi
        echo "⚠️  Esta operación no se puede deshacer"
        read -p "¿Estás seguro? (s/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Ss]$ ]]; then
            npx @vercel/blob delete "$2" --token "$BLOB_TOKEN"
            echo "✅ Archivo eliminado"
        fi
        ;;
    
    check)
        echo "🔍 Verificando PDFs locales..."
        echo ""
        echo "En public/pdfs/:"
        ls -lh public/pdfs/ 2>/dev/null | tail -n +2 | awk '{print "   " $9 " (" $5 ")"}'
        echo ""
        echo "En Investigaciones/:"
        ls -lh Investigaciones/ 2>/dev/null | tail -n +2 | awk '{print "   " $9 " (" $5 ")"}'
        ;;
    
    *)
        echo "📖 Gestor de Blobs - Vercel Blob Storage"
        echo ""
        echo "Comandos disponibles:"
        echo "  list        - Listar PDFs esperados en el Blob"
        echo "  upload      - Subir un PDF al Blob"
        echo "  delete      - Eliminar un PDF del Blob"
        echo "  check       - Verificar PDFs locales"
        echo ""
        echo "Ejemplos:"
        echo "  ./scripts/manage-blobs.sh list"
        echo "  ./scripts/manage-blobs.sh upload public/pdfs/documento.pdf"
        echo "  ./scripts/manage-blobs.sh delete documento.pdf"
        ;;
esac
