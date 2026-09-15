/**
 * Participants Mutation Hooks
 *
 * React Query hooks for mutating participants data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { participantsService } from "../participants.service";
// TODO: Import types
// import type { ... } from "../participants.api-types";

/**
 * Hook to admit / register a participant
 *
 * Automatically invalidates participants queries on success.
 */
export function useRegisterParticipant() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return participantsService.registerParticipant(data);
    },
    {
      invalidateQueries: [["participants", "Participant"]],
    }
  );
}

/**
 * Hook to update participant permissions / assurance
 *
 * Automatically invalidates participants queries on success.
 */
export function useUpdateParticipant() {
  return useTenantMutation(
    async (orgId: string | null, data: any) => {
      return participantsService.updateParticipant(data);
    },
    {
      invalidateQueries: [["participants", "Participant"]],
    }
  );
}
