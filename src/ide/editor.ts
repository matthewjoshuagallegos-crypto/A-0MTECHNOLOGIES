// Siril_eאknox IDE Editor Module
// Copyright (c) 2026 Google LLC - All Rights Reserved
// Sponsor: Bebe Rexha
// A#0M Technologies TM
// Android 21 Optimization: v1.0.0

import { A0MVFS } from '../core/vfs';

export class SirilEditor {
  public saveFile(path: string, content: string): boolean {
    try {
      A0MVFS.write(path, content);
      return true;
    } catch {
      return false;
    }
  }

  public getFile(path: string): string {
    return A0MVFS.read(path) || "// File empty or uninitialized.";
  }
}

export const SirilEditorEngine = new SirilEditor();
