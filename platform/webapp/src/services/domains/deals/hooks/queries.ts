/**
 * Deals Query Hooks
 *
 * React Query hooks for fetching deals data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { dealsService } from "../deals.service";

/**
 * Hook to list deals (shared blotter)
 *
 * Query key: ["deals", "Deal", ]
 */
export function useListTradeDeals(params?: Record<string, any>) {
  return useTenantQuery(
    ["deals", "Deal", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return dealsService.listTradeDeals(params, signal);
    }
  );
}

/**
 * Hook to get deal
 *
 * Query key: ["deals", "Deal", dealId]
 */
export function useGetTradeDeal(dealId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["deals", "Deal", dealId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return dealsService.getTradeDeal(dealId, params, signal);
    },
    {
      enabled: !!dealId
    }
  );
}

/**
 * Hook to list party assertions for a deal
 *
 * Query key: ["deals", "Assertion", dealId]
 */
export function useListDealAssertions(dealId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["deals", "Assertion", dealId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return dealsService.listDealAssertions(dealId, params, signal);
    },
    {
      enabled: !!dealId
    }
  );
}

/**
 * Hook to get current agreed state
 *
 * Query key: ["deals", "AgreedState", dealId]
 */
export function useGetAgreedState(dealId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["deals", "AgreedState", dealId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return dealsService.getAgreedState(dealId, params, signal);
    },
    {
      enabled: !!dealId
    }
  );
}

/**
 * Hook to list ca/tf milestones
 *
 * Query key: ["deals", "Milestone", dealId]
 */
export function useListDocumentMilestones(dealId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["deals", "Milestone", dealId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return dealsService.listDocumentMilestones(dealId, params, signal);
    },
    {
      enabled: !!dealId
    }
  );
}

/**
 * Hook to list corporate-action events
 *
 * Query key: ["deals", "CorporateAction", dealId]
 */
export function useListCorporateActionEvents(dealId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["deals", "CorporateAction", dealId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return dealsService.listCorporateActionEvents(dealId, params, signal);
    },
    {
      enabled: !!dealId
    }
  );
}

/**
 * Hook to query asset / rehypothecation provenance chain
 *
 * Query key: ["deals", "Provenance", assetId]
 */
export function useGetAssetProvenance(assetId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["deals", "Provenance", assetId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return dealsService.getAssetProvenance(assetId, params, signal);
    },
    {
      enabled: !!assetId
    }
  );
}
