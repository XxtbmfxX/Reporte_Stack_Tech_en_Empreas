/**
 * Configuración centralizada de PDFs usando Vercel Blob Storage
 * 
 * URL base pública del Blob - segura de exponer (solo lectura)
 * Los archivos deben subirse manualmente al Blob Storage de Vercel
 */

// URL base pública del Vercel Blob Storage (solo lectura, segura)
export const BLOB_BASE_URL = "https://kw9lfumcncnepibk.public.blob.vercel-storage.com";

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

export type PdfKey = keyof typeof PDF_FILES;

/**
 * Obtiene la URL completa de un PDF desde Vercel Blob
 */
export function getPdfUrl(pdfKey: PdfKey): string {
  const fileName = PDF_FILES[pdfKey];
  return `${BLOB_BASE_URL}/${encodeURIComponent(fileName)}`;
}
