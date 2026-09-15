/**
 * Collateral Domain Facade
 *
 * High-level API for collateral domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { collateralService } from "./collateral.service";
// TODO: Import types
// import type { ... } from "./collateral.api-types";

/**
 * Collateral Facade
 *
 * High-level API for collateral operations.
 * Components should use this facade instead of services directly.
 */
export const collateralFacade = {
  /**
   * List collateral locks
   */
  async listCollateralLocks(...args: Parameters<typeof collateralService.listCollateralLocks>): Promise<any> {
    return collateralService.listCollateralLocks(...args);
  },

  /**
   * Get collateral lock
   */
  async getCollateralLock(...args: Parameters<typeof collateralService.getCollateralLock>): Promise<any> {
    return collateralService.getCollateralLock(...args);
  },

  /**
   * Release collateral on finality
   */
  async releaseCollateralLock(...args: Parameters<typeof collateralService.releaseCollateralLock>): Promise<any> {
    return collateralService.releaseCollateralLock(...args);
  }
};
