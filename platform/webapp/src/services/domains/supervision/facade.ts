/**
 * Supervision Domain Facade
 *
 * High-level API for supervision domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { supervisionService } from "./supervision.service";
// TODO: Import types
// import type { ... } from "./supervision.api-types";

/**
 * Supervision Facade
 *
 * High-level API for supervision operations.
 * Components should use this facade instead of services directly.
 */
export const supervisionFacade = {
  /**
   * List supervisory subscriptions
   */
  async listSupervisorySubscriptions(...args: Parameters<typeof supervisionService.listSupervisorySubscriptions>): Promise<any> {
    return supervisionService.listSupervisorySubscriptions(...args);
  },

  /**
   * Grant a supervisory subscription
   */
  async createSupervisorySubscription(...args: Parameters<typeof supervisionService.createSupervisorySubscription>): Promise<any> {
    return supervisionService.createSupervisorySubscription(...args);
  },

  /**
   * Get supervisory subscription
   */
  async getSupervisorySubscription(...args: Parameters<typeof supervisionService.getSupervisorySubscription>): Promise<any> {
    return supervisionService.getSupervisorySubscription(...args);
  },

  /**
   * Pull near-real-time agreed fields for a subscription
   */
  async getSupervisoryFeed(...args: Parameters<typeof supervisionService.getSupervisoryFeed>): Promise<any> {
    return supervisionService.getSupervisoryFeed(...args);
  }
};
