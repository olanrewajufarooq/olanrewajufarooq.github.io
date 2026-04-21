export function formatCertificateDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export function isCertificateExpired(expirationDate?: string): boolean {
  if (!expirationDate) return false;
  const expDate = new Date(expirationDate);
  return expDate < new Date();
}

export function certificateStatus(expirationDate?: string): 'active' | 'expiring' | 'expired' {
  if (!expirationDate) return 'active';
  
  const expDate = new Date(expirationDate);
  const now = new Date();
  const daysUntilExpiration = (expDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  
  if (daysUntilExpiration < 0) return 'expired';
  if (daysUntilExpiration < 90) return 'expiring';
  return 'active';
}
