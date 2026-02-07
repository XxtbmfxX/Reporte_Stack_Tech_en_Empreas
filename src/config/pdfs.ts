/**
 * Configuración centralizada de PDFs usando Vercel Blob Storage
 * 
 * Los PDFs deben subirse al Blob con los mismos nombres de archivo.
 * URL base: https://kw9lfumcncnepibk.public.blob.vercel-storage.com
 */

import { BLOB_BASE_URL } from "astro:env/client";

// Nombres de los archivos PDF en el Blob Storage
export const PDF_FILES = {
  anatomiaDigitalPyme: "Anatomía_Digital_PYME_2025.pdf",
  arquitecturaEmpresaTi: "Arquitectura_de_una_Empresa_TI.pdf",
  digitalOrchestration: "Digital_Orchestration_Chile_2026.pdf",
  ecosistemasCapitalHumano: "Ecosistemas_de_Capital_Humano_Análisis_Estratégico.pdf",
  estrategiaTecnologiaCompliance: "Estrategia_Tecnología_Compliance.pdf",
  legalSystemArchitecture: "Legal_System_Architecture_Chile.pdf",
  resumenGeneral: "ResumenGeneral1.pdf",
} as const;

// Tipo para las claves de PDF
export type PdfKey = keyof typeof PDF_FILES;

/**
 * Obtiene la URL completa de un PDF desde Vercel Blob
 * @param pdfKey - Clave del PDF en el objeto PDF_FILES
 * @returns URL completa del PDF
 */
export function getPdfUrl(pdfKey: PdfKey): string {
  const fileName = PDF_FILES[pdfKey];
  // Codificar caracteres especiales en el nombre del archivo
  const encodedFileName = encodeURIComponent(fileName);
  return `${BLOB_BASE_URL}/${encodedFileName}`;
}

/**
 * Obtiene la URL de un PDF usando el nombre de archivo directamente
 * @param fileName - Nombre del archivo PDF
 * @returns URL completa del PDF
 */
export function getPdfUrlByFileName(fileName: string): string {
  const encodedFileName = encodeURIComponent(fileName);
  return `${BLOB_BASE_URL}/${encodedFileName}`;
}
