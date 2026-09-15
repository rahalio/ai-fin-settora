/**
 * Finality Domain Facade
 *
 * High-level API for finality domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { finalityService } from "./finality.service";
// TODO: Import types
// import type { ... } from "./finality.api-types";

/**
 * Finality Facade
 *
 * High-level API for finality operations.
 * Components should use this facade instead of services directly.
 */
export const finalityFacade = {
  /**
   * List finality attestations
   */
  async listFinalityAttestations(...args: Parameters<typeof finalityService.listFinalityAttestations>): Promise<any> {
    return finalityService.listFinalityAttestations(...args);
  },

  /**
   * Record a finality attestation
   */
  async recordFinalityAttestation(...args: Parameters<typeof finalityService.recordFinalityAttestation>): Promise<any> {
    return finalityService.recordFinalityAttestation(...args);
  },

  /**
   * Get finality attestation
   */
  async getFinalityAttestation(...args: Parameters<typeof finalityService.getFinalityAttestation>): Promise<any> {
    return finalityService.getFinalityAttestation(...args);
  }
};
