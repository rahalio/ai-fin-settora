/**
 * Finality Domain Contracts
 *
 * Re-exports Zod schemas from @settora/core for runtime validation.
 * This avoids duplication and ensures alignment with the API contract.
 *
 * Architecture:
 * - Single source of truth: @settora/core
 * - No code duplication or drift
 * - Runtime validation of API responses
 * - Used in services to validate responses
 *
 * @see @settora/core/finality for the source schemas
 */

import { finalitySchemas as coreFinalitySchemas } from "@settora/core/finality";
import type { z } from "zod";

/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
/**
 * Export all schemas as a namespace for convenience
 */
export const finalitySchemas = coreFinalitySchemas;
