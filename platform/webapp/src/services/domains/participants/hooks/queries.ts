/**
 * Participants Query Hooks
 *
 * React Query hooks for fetching participants data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { participantsService } from "../participants.service";

/**
 * Hook to list participants
 *
 * Query key: ["participants", "Participant", ]
 */
export function useListParticipants(params?: Record<string, any>) {
  return useTenantQuery(
    ["participants", "Participant", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return participantsService.listParticipants(params, signal);
    }
  );
}

/**
 * Hook to get participant
 *
 * Query key: ["participants", "Participant", participantId]
 */
export function useGetParticipant(participantId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["participants", "Participant", participantId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return participantsService.getParticipant(participantId, params, signal);
    },
    {
      enabled: !!participantId
    }
  );
}
