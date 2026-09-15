/**
 * Supervision Query Hooks
 *
 * React Query hooks for fetching supervision data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { supervisionService } from "../supervision.service";

/**
 * Hook to list supervisory subscriptions
 *
 * Query key: ["supervision", "Subscription", ]
 */
export function useListSupervisorySubscriptions(params?: Record<string, any>) {
  return useTenantQuery(
    ["supervision", "Subscription", ],
    async (orgId: string | null, signal?: AbortSignal) => {
      return supervisionService.listSupervisorySubscriptions(params, signal);
    }
  );
}

/**
 * Hook to get supervisory subscription
 *
 * Query key: ["supervision", "Subscription", subscriptionId]
 */
export function useGetSupervisorySubscription(subscriptionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["supervision", "Subscription", subscriptionId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return supervisionService.getSupervisorySubscription(subscriptionId, params, signal);
    },
    {
      enabled: !!subscriptionId
    }
  );
}

/**
 * Hook to pull near-real-time agreed fields for a subscription
 *
 * Query key: ["supervision", "Feed", subscriptionId]
 */
export function useGetSupervisoryFeed(subscriptionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["supervision", "Feed", subscriptionId],
    async (orgId: string | null, signal?: AbortSignal) => {
      return supervisionService.getSupervisoryFeed(subscriptionId, params, signal);
    },
    {
      enabled: !!subscriptionId
    }
  );
}
