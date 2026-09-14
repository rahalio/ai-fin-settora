# Settora — User stories

**Product:** [PRODUCT.md](./PRODUCT.md)


### Settlements analyst

- As a settlements analyst, I want matched trades to produce a single shared instruction, so that I stop chasing counterparties over copy-paste mismatches.
- As a settlements analyst, I want breaks to open with the conflicting fields highlighted, so that investigation starts at the disagreement, not the entire trade blotter.

### Collateral / margin manager

- As a collateral manager, I want visibility into which settlements are still locking margin, so that I can free capital when finality is achieved.
- As a collateral manager, when a fail risk rises, I want early warning from shared state, so that I pre-fund rather than discover the fail at cut-off.

### Trade-finance operations

- As a trade-finance ops lead, I want document acceptance and discrepancy events on the same deal state as the payment obligation, so that letters of credit stop living in email threads.
- As a trade-finance ops lead, I want a provenance trail of who attested each milestone, so that fraud disputes have an evidence base.

### Compliance / regulatory reporting

- As a compliance officer, I want authorised regulators to pull agreed trade state for reporting fields, so that we reduce reconcile-then-report cycles.
- As a compliance officer, I want immutable timestamps on state changes, so that market-abuse reviews have a reliable sequence.

### Consortium governor / legal

- As a consortium governor, I want to suspend a participant that repeatedly submits invalid instructions, so that one bad actor cannot flood the network with breaks.
- As legal counsel, I want each settlement corridor tagged with its finality jurisdiction and opinion version, so that “settled on Settora” has a legal meaning.
- As a platform administrator, when two parties dispute a corporate-action entitlement, I want shared history frozen for the disputed fields while the rest of the book moves, so that one fight does not halt the market.
