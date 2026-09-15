/**
 * Identity Domain Facade
 *
 * High-level API for identity domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { identityService } from "./identity.service";
// TODO: Import types
// import type { ... } from "./identity.api-types";

/**
 * Identity Facade
 *
 * High-level API for identity operations.
 * Components should use this facade instead of services directly.
 */
export const identityFacade = {
  /**
   * List API keys for the current tenant
   */
  async listTenantApiKeys(...args: Parameters<typeof identityService.listTenantApiKeys>): Promise<any> {
    return identityService.listTenantApiKeys(...args);
  },

  /**
   * Create an API key (secret returned once)
   */
  async createTenantApiKey(...args: Parameters<typeof identityService.createTenantApiKey>): Promise<any> {
    return identityService.createTenantApiKey(...args);
  },

  /**
   * Get API key metadata
   */
  async getTenantApiKey(...args: Parameters<typeof identityService.getTenantApiKey>): Promise<any> {
    return identityService.getTenantApiKey(...args);
  },

  /**
   * Revoke an API key
   */
  async revokeTenantApiKey(...args: Parameters<typeof identityService.revokeTenantApiKey>): Promise<any> {
    return identityService.revokeTenantApiKey(...args);
  },

  /**
   * List operator users for the current tenant
   */
  async listTenantUsers(...args: Parameters<typeof identityService.listTenantUsers>): Promise<any> {
    return identityService.listTenantUsers(...args);
  },

  /**
   * Create an operator user (password set once)
   */
  async createTenantUser(...args: Parameters<typeof identityService.createTenantUser>): Promise<any> {
    return identityService.createTenantUser(...args);
  },

  /**
   * Get operator user metadata
   */
  async getTenantUser(...args: Parameters<typeof identityService.getTenantUser>): Promise<any> {
    return identityService.getTenantUser(...args);
  },

  /**
   * Update display name, role, or reset password
   */
  async updateTenantUser(...args: Parameters<typeof identityService.updateTenantUser>): Promise<any> {
    return identityService.updateTenantUser(...args);
  },

  /**
   * Disable an operator user
   */
  async disableTenantUser(...args: Parameters<typeof identityService.disableTenantUser>): Promise<any> {
    return identityService.disableTenantUser(...args);
  },

  /**
   * Re-enable an operator user
   */
  async enableTenantUser(...args: Parameters<typeof identityService.enableTenantUser>): Promise<any> {
    return identityService.enableTenantUser(...args);
  },

  /**
   * Operator login (stub)
   */
  async operatorLogin(...args: Parameters<typeof identityService.operatorLogin>): Promise<any> {
    return identityService.operatorLogin(...args);
  },

  /**
   * Current operator session
   */
  async getOperatorMe(...args: Parameters<typeof identityService.getOperatorMe>): Promise<any> {
    return identityService.getOperatorMe(...args);
  },

  /**
   * Update own display name
   */
  async updateOperatorMe(...args: Parameters<typeof identityService.updateOperatorMe>): Promise<any> {
    return identityService.updateOperatorMe(...args);
  },

  /**
   * Refresh operator tokens (stub)
   */
  async operatorRefresh(...args: Parameters<typeof identityService.operatorRefresh>): Promise<any> {
    return identityService.operatorRefresh(...args);
  },

  /**
   * Operator logout (stub)
   */
  async operatorLogout(...args: Parameters<typeof identityService.operatorLogout>): Promise<any> {
    return identityService.operatorLogout(...args);
  }
};
