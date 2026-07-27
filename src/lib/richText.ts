export interface EmphasisChunk {
  bold: boolean;
  text: string;
}

/** Splits text on `**bold**` markers for lightweight inline emphasis. */
export function renderEmphasis(text: string): EmphasisChunk[] {
  return text.split(/(\*\*.+?\*\*)/g).map((chunk) =>
    chunk.startsWith("**") && chunk.endsWith("**")
      ? { bold: true, text: chunk.slice(2, -2) }
      : { bold: false, text: chunk },
  );
}
