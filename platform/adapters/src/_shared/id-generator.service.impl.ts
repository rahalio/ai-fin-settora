/**
 * ID Generator Service Implementation — Settora prefixes.
 */

import type { DomainCode } from '@settora/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@settora/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@settora/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  participantsId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.participants);
  }
  dealsId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.deals);
  }
  breaksId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.breaks);
  }
  settlementsId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.settlements);
  }
  finalityId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.finality);
  }
  collateralId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.collateral);
  }
  governanceId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.governance);
  }
  supervisionId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.supervision);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
