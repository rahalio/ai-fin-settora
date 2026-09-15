/**
 * Governance Domain Facade
 *
 * High-level API for governance domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { governanceService } from "./governance.service";
// TODO: Import types
// import type { ... } from "./governance.api-types";

/**
 * Governance Facade
 *
 * High-level API for governance operations.
 * Components should use this facade instead of services directly.
 */
export const governanceFacade = {
  /**
   * List rulebook versions
   */
  async listRulebookVersions(...args: Parameters<typeof governanceService.listRulebookVersions>): Promise<any> {
    return governanceService.listRulebookVersions(...args);
  },

  /**
   * Publish a rulebook / schema version
   */
  async publishRulebookVersion(...args: Parameters<typeof governanceService.publishRulebookVersion>): Promise<any> {
    return governanceService.publishRulebookVersion(...args);
  },

  /**
   * Get rulebook version
   */
  async getRulebookVersion(...args: Parameters<typeof governanceService.getRulebookVersion>): Promise<any> {
    return governanceService.getRulebookVersion(...args);
  },

  /**
   * List governance votes
   */
  async listGovernanceVotes(...args: Parameters<typeof governanceService.listGovernanceVotes>): Promise<any> {
    return governanceService.listGovernanceVotes(...args);
  },

  /**
   * Cast a governance vote
   */
  async castGovernanceVote(...args: Parameters<typeof governanceService.castGovernanceVote>): Promise<any> {
    return governanceService.castGovernanceVote(...args);
  },

  /**
   * Suspend a participant
   */
  async suspendParticipant(...args: Parameters<typeof governanceService.suspendParticipant>): Promise<any> {
    return governanceService.suspendParticipant(...args);
  }
};
