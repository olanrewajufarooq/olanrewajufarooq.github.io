export interface CertificateItem {
  id: string;
  name: string;
  date: string;
  issuer: string;
  platform?: string | null;
  verificationUrl?: string | null;
  image: string;
}

export interface CertificateProviderGroup {
  id: string;
  name: string;
  items: CertificateItem[];
}

export interface CertificatesData {
  providers: CertificateProviderGroup[];
}
