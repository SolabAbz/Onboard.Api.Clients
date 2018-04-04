export * from './certificate.service';
import { CertificateService } from './certificate.service';
export * from './people.service';
import { PeopleService } from './people.service';
export const APIS = [CertificateService, PeopleService];
