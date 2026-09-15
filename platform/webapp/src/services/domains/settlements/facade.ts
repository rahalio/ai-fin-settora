/**
 * Settlements Domain Facade
 *
 * High-level API for settlements domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { settlementsService } from "./settlements.service";
// TODO: Import types
// import type { ... } from "./settlements.api-types";

/**
 * Settlements Facade
 *
 * High-level API for settlements operations.
 * Components should use this facade instead of services directly.
 */
export const settlementsFacade = {
  /**
   * List settlement instructions
   */
  async listSettlementInstructions(...args: Parameters<typeof settlementsService.listSettlementInstructions>): Promise<any> {
    return settlementsService.listSettlementInstructions(...args);
  },

  /**
   * Create instruction from agreed state
   */
  async createSettlementInstruction(...args: Parameters<typeof settlementsService.createSettlementInstruction>): Promise<any> {
    return settlementsService.createSettlementInstruction(...args);
  },

  /**
   * Get settlement instruction
   */
  async getSettlementInstruction(...args: Parameters<typeof settlementsService.getSettlementInstruction>): Promise<any> {
    return settlementsService.getSettlementInstruction(...args);
  },

  /**
   * Send instruction to incumbent rail
   */
  async sendSettlementInstruction(...args: Parameters<typeof settlementsService.sendSettlementInstruction>): Promise<any> {
    return settlementsService.sendSettlementInstruction(...args);
  },

  /**
   * Cancel instruction pre-rail
   */
  async cancelSettlementInstruction(...args: Parameters<typeof settlementsService.cancelSettlementInstruction>): Promise<any> {
    return settlementsService.cancelSettlementInstruction(...args);
  }
};
