/**
 * Participants Domain Facade
 *
 * High-level API for participants domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { participantsService } from "./participants.service";
// TODO: Import types
// import type { ... } from "./participants.api-types";

/**
 * Participants Facade
 *
 * High-level API for participants operations.
 * Components should use this facade instead of services directly.
 */
export const participantsFacade = {
  /**
   * List participants
   */
  async listParticipants(...args: Parameters<typeof participantsService.listParticipants>): Promise<any> {
    return participantsService.listParticipants(...args);
  },

  /**
   * Admit / register a participant
   */
  async registerParticipant(...args: Parameters<typeof participantsService.registerParticipant>): Promise<any> {
    return participantsService.registerParticipant(...args);
  },

  /**
   * Get participant
   */
  async getParticipant(...args: Parameters<typeof participantsService.getParticipant>): Promise<any> {
    return participantsService.getParticipant(...args);
  },

  /**
   * Update participant permissions / assurance
   */
  async updateParticipant(...args: Parameters<typeof participantsService.updateParticipant>): Promise<any> {
    return participantsService.updateParticipant(...args);
  }
};
