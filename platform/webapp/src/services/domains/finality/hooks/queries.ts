/**
 * Finality Query Hooks
 *
 * React Query hooks for fetching finality data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { finalityService } from "../finality.service";

/**
 * Hook to list finality attestations
 *
 * Query key: ["finality", "Attestation", ]
 */
export function useListFinalityAttestations(params?: Record<string, any>) {
  return useTenantQuery(
    ["finality", "Attestation", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return finalityService.listFinalityAttestations(params, signal);
    }
  );
}

/**
 * Hook to get finality attestation
 *
 * Query key: ["finality", "Attestation", attestationId]
 */
export function useGetFinalityAttestation(attestationId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["finality", "Attestation", attestationId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return finalityService.getFinalityAttestation(attestationId, params, signal);
    },
    {
      enabled: !!attestationId
    }
  );
}
