/**
 * IdGeneratorService Port — Settora domain prefixes.
 */

import type { DomainCode } from '@settora/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  participantsId(): string;
  dealsId(): string;
  breaksId(): string;
  settlementsId(): string;
  finalityId(): string;
  collateralId(): string;
  governanceId(): string;
  supervisionId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
