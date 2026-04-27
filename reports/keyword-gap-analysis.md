# Keyword Gap Analysis (Top-Spend Ad Groups First)

## Scope and Defaults
- Source: `src/content/keywords-clem.csv`
- Top-spend scope: 12 ad groups
- Planner scope: historical metrics + keyword ideas
- Filters: exclude low-intent and broad geo/near-me expansion unless marked `Watch`
- Priority objective: PPC efficiency with planner metrics

## Decision-Ready Matrix (Top 12 Ad Groups)

| Ad Group | Missing Term | Why It Belongs | Priority | Suggested Match Type | Source | Avg Monthly Searches | Competition | Competition Index | Top of Page Bid Range | Notes / Negatives |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| California Fulfillment | southern california 3pl | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: new jersey, amazon, beauty, new york |
| California Fulfillment | california ecommerce fulfillment center | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: new jersey, amazon, beauty, new york |
| California Fulfillment | west coast 3pl california | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: new jersey, amazon, beauty, new york |
| California Fulfillment | california pick and pack fulfillment | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: new jersey, amazon, beauty, new york |
| New Jersey Fulfillment | new jersey ecommerce fulfillment center | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, amazon, beauty, new york |
| New Jersey Fulfillment | nj 3pl warehouse | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, amazon, beauty, new york |
| New Jersey Fulfillment | east coast 3pl new jersey | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, amazon, beauty, new york |
| New Jersey Fulfillment | new jersey order fulfillment company | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, amazon, beauty, new york |
| Amazon Fulfillment | amazon fba prep center | Transactional Amazon logistics variant aligned to fulfillment outsourcing intent. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, beauty, new york |
| Amazon Fulfillment | fba prep services | Transactional Amazon logistics variant aligned to fulfillment outsourcing intent. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, beauty, new york |
| Amazon Fulfillment | amazon prep center 3pl | Transactional Amazon logistics variant aligned to fulfillment outsourcing intent. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, beauty, new york |
| Amazon Fulfillment | fbm 3pl amazon | Transactional Amazon logistics variant aligned to fulfillment outsourcing intent. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, beauty, new york |
| 3PL | 3pl fulfillment company | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| 3PL | 3pl provider ecommerce | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| 3PL | outsourced fulfillment services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| 3PL | third party logistics provider | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| beauty fulfillment | cosmetics 3pl | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, new york |
| beauty fulfillment | beauty product fulfillment center | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, new york |
| beauty fulfillment | skincare fulfillment services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, new york |
| beauty fulfillment | supplement and beauty fulfillment | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, new york |
| New York Fulfillment | new york 3pl warehouse | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| New York Fulfillment | nyc fulfillment center | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| New York Fulfillment | new york ecommerce fulfillment company | Geo + fulfillment intent variant aligned to regional campaign targeting. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Clothing Fulfillment | fashion fulfillment services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Clothing Fulfillment | garment fulfillment center | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Clothing Fulfillment | clothing 3pl services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Shirt Fulfillment | custom t shirt fulfillment | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Shirt Fulfillment | bulk t shirt fulfillment | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Shirt Fulfillment | print on demand shirt fulfillment | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Apparel Fulfillment | apparel 3pl services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Apparel Fulfillment | fashion apparel fulfillment | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Apparel Fulfillment | apparel pick and pack | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Ecommerce Fulfillment Services, Companies | ecommerce 3pl services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Ecommerce Fulfillment Services, Companies | shopify ecommerce fulfillment services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Ecommerce Fulfillment Services, Companies | direct to consumer fulfillment services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| fulfillment center | fulfillment center services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| fulfillment center | 3pl fulfillment center | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| fulfillment center | order fulfillment center | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Los Angeles Fulfillment | ecommerce order fulfillment company | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |
| Los Angeles Fulfillment | 3pl warehouse services | Commercial service variant aligned to this ad group theme. | Watch | Phrase | rule_template | 0 | UNKNOWN | -1 | $0.00-$0.00 | Start with Phrase; add negatives: california, new jersey, amazon, beauty |

## Phase-2 Backlog (Remaining Ad Groups)

| Ad Group | Current Spend | Next Expansion Terms |
| --- | ---: | --- |
| Pick and Pack | $558.37 | ecommerce order fulfillment company; 3pl warehouse services |
| Cosmetics Fulfillment | $523.74 | ecommerce order fulfillment company; 3pl warehouse services |
| Near Me | $451.21 | local ecommerce fulfillment company; regional 3pl provider; near me 3pl services |
| Ecommerce 3PL | $283.16 | ecommerce order fulfillment company; 3pl warehouse services |
| eBay Fulfillment | $224.88 | ecommerce order fulfillment company; 3pl warehouse services |
| Near Me | $219.05 | local ecommerce fulfillment company; regional 3pl provider; near me 3pl services |
| California Fulfillment | $187.00 | southern california 3pl; california ecommerce fulfillment center; west coast 3pl california |
| Shirt Fulfillment | $171.40 | custom t shirt fulfillment; bulk t shirt fulfillment; print on demand shirt fulfillment |
| Fashion Fulfillment | $167.75 | ecommerce order fulfillment company; 3pl warehouse services |
| etsy fulfillment | $156.37 | ecommerce order fulfillment company; 3pl warehouse services |
| Woocommerce Fulfillment | $127.29 | ecommerce order fulfillment company; 3pl warehouse services |
| Southern California fulfillment | $121.94 | southern california 3pl; california ecommerce fulfillment center; west coast 3pl california |
| Garment Fulfillment | $113.39 | ecommerce order fulfillment company; 3pl warehouse services |
| New Jersey Fulfillment | $108.31 | new jersey ecommerce fulfillment center; nj 3pl warehouse; east coast 3pl new jersey |
| Retail Fulfillment | $105.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Amazon Fulfillment | $86.01 | amazon fba prep center; fba prep services; amazon prep center 3pl |
| fulfillment center | $73.74 | fulfillment center services; 3pl fulfillment center; order fulfillment center |
| Near Me | $66.28 | local ecommerce fulfillment company; regional 3pl provider; near me 3pl services |
| Los Angeles Fulfillment | $60.31 | ecommerce order fulfillment company; 3pl warehouse services |
| 3PL | $56.41 | 3pl fulfillment company; 3pl provider ecommerce; outsourced fulfillment services |
| East Coast Fulfillment | $49.99 | ecommerce order fulfillment company; 3pl warehouse services |
| Retail Fulfillment | $47.83 | ecommerce order fulfillment company; 3pl warehouse services |
| New York Fulfillment | $42.27 | new york 3pl warehouse; nyc fulfillment center; new york ecommerce fulfillment company |
| B2B Fulfillment | $41.79 | ecommerce order fulfillment company; 3pl warehouse services |
| Apparel Fulfillment | $40.18 | apparel 3pl services; fashion apparel fulfillment; apparel pick and pack |
| Shoe Fulfillment | $40.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Cosmetics Fulfillment | $39.83 | ecommerce order fulfillment company; 3pl warehouse services |
| Woocommerce Fulfillment | $32.41 | ecommerce order fulfillment company; 3pl warehouse services |
| Skincare Fulfillment | $28.54 | ecommerce order fulfillment company; 3pl warehouse services |
| eBay Fulfillment | $24.59 | ecommerce order fulfillment company; 3pl warehouse services |
| West Coast Fulfillment | $19.57 | ecommerce order fulfillment company; 3pl warehouse services |
| etsy fulfillment | $18.08 | ecommerce order fulfillment company; 3pl warehouse services |
| Fashion Fulfillment | $18.03 | ecommerce order fulfillment company; 3pl warehouse services |
| Ecommerce Fulfillment Center or Warehouse | $17.84 | ecommerce order fulfillment company; 3pl warehouse services |
| Shopify Fulfillment | $17.76 | ecommerce order fulfillment company; 3pl warehouse services |
| Ecommerce Fulfillment Services, Companies | $16.58 | ecommerce 3pl services; shopify ecommerce fulfillment services; direct to consumer fulfillment services |
| beauty fulfillment | $7.80 | cosmetics 3pl; beauty product fulfillment center; skincare fulfillment services |
| Pick and Pack | $7.71 | ecommerce order fulfillment company; 3pl warehouse services |
| Near Me | $7.20 | local ecommerce fulfillment company; regional 3pl provider; near me 3pl services |
| Omnichannel Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Shopify Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ecommerce Fulfillment Center or Warehouse | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Bigcommerce Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Magento Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Skincare Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| eCommerce fulfillmenta | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ad group 1 | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Shoe Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Clothing Fulfillment | $0.00 | fashion fulfillment services; garment fulfillment center; clothing 3pl services |
| Garment Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Bigcommerce Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Magento Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| East Coast Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| West Coast Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Southern California fulfillment | $0.00 | southern california 3pl; california ecommerce fulfillment center; west coast 3pl california |
| switch 3pl | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| 3pl alternative | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Competitor | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| B2B Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Omnichannel Fulfillment | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |
| Ecommerce 3PL | $0.00 | ecommerce order fulfillment company; 3pl warehouse services |

## Validation Checks
- Deduplication check: passed
- Boundary check: passed
- Intent filter check: passed
- Coverage check: passed

Generated on 2026-04-27T11:11:31.722Z.
