import React, { useState } from "react";

const legalData = [
  {
    query: "motor accident self-employed 54–55",
    answer:
      "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
    citations: [
      {
        text:
          "As the age of the deceased was held to be about 54–55 years by the learned Tribunal... (Para 7)",
        source: "Dani_Devi_v_Pritam_Singh.pdf",
        link:
          "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
      },
    ],
  },
  {
    query: "online fir in india",
    answer:
      "Yes, in many states of India, FIRs can be filed online through state police portals. However, for serious offenses, visiting the police station is still required.",
    citations: [
      {
        text: "Most Indian states now offer online FIR services for non-cognizable offenses.",
        source: "Indian_Law_Online_FIR.pdf",
        link: "https://example.com/online-fir.pdf",
      },
    ],
  },
  {
    query: "valid permit insurance liability",
    answer:
      "No, if a vehicle is used without a valid permit, the insurer can recover the compensation paid from the vehicle owner.",
    citations: [
      {
        text:
          "Using a vehicle without a permit is a statutory infraction. The insurer can recover compensation.",
        source: "SC_Judgment_Insurance.pdf",
        link: "https://example.com/insurance-permit.pdf",
      },
    ],
  },
  {
    query: "succession certificate vs legal heir certificate",
    answer:
      "A succession certificate is used to claim movable assets like bank deposits; a legal heir certificate is for establishing legal heirs for property division.",
    citations: [
      {
        text: "Succession certificate is issued by a civil court under the Indian Succession Act.",
        source: "Succession_vs_LegalHeir.pdf",
        link: "https://example.com/succession-legal-heir.pdf",
      },
    ],
  },
  {
    query: "bail application under ipc 498a",
    answer:
      "Yes, bail can be granted in IPC 498A cases depending on the facts. Courts consider cruelty, evidence, and nature of allegations.",
    citations: [
      {
        text: "498A IPC deals with cruelty by husband or relatives. Bail is not automatically denied.",
        source: "IPC_498A_Bail_Guidelines.pdf",
        link: "https://example.com/498a-bail.pdf",
      },
    ],
  },
  {
    query: "cheque bounce case timeline",
    answer:
      "The timeline for a cheque bounce case includes 30 days from receiving return memo, 15 days for payment, and then 30 days to file the case.",
    citations: [
      {
        text: "Section 138 of the Negotiable Instruments Act defines the timeline clearly.",
        source: "Cheque_Bounce_Section138.pdf",
        link: "https://example.com/cheque-bounce.pdf",
      },
    ],
  },
  {
    query: "divorce mutual consent cooling period",
    answer:
      "Yes, the Supreme Court can waive the 6-month cooling period under Section 13B(2) of the Hindu Marriage Act.",
    citations: [
      {
        text: "Cooling-off period can be waived if separation exceeds 18 months.",
        source: "SC_Cooling_Period_Divorce.pdf",
        link: "https://example.com/divorce-cooling.pdf",
      },
    ],
  },
  {
    query: "property rights of daughters after 2005",
    answer:
      "After the 2005 amendment, daughters have equal rights in ancestral property under the Hindu Succession Act.",
    citations: [
      {
        text: "Daughters are coparceners by birth in Hindu Undivided Families.",
        source: "Hindu_Succession_2005.pdf",
        link: "https://example.com/daughter-rights.pdf",
      },
    ],
  },
  {
    query: "dowry definition under law",
    answer:
      "Dowry refers to any property or valuable security given in connection with marriage, as defined in the Dowry Prohibition Act, 1961.",
    citations: [
      {
        text: "Section 2 of the Dowry Prohibition Act defines dowry comprehensively.",
        source: "Dowry_Definition_Law.pdf",
        link: "https://example.com/dowry-definition.pdf",
      },
    ],
  },
  {
    query: "maintenance for wife after divorce",
    answer:
      "Under Section 125 CrPC, a divorced wife is entitled to maintenance if she is unable to maintain herself.",
    citations: [
      {
        text: "The Supreme Court has upheld the right of a divorced wife to claim maintenance.",
        source: "Wife_Maintenance_CrPC.pdf",
        link: "https://example.com/maintenance-wife.pdf",
      },
    ],
  },
];

const App = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const result = legalData.find((item) =>
        query.toLowerCase().includes(item.query)
      );
      if (result) {
        setResponse(result);
      } else {
        setResponse({
          answer: "No data found for this question.",
          citations: [],
        });
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Lexi Legal Assistant</h1>

        <button
          onClick={() => setShowQuestions(!showQuestions)}
          className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          {showQuestions ? "Hide Sample Questions" : "Show Sample Questions"}
        </button>

        {showQuestions && (
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Try a sample question:</h2>
            <div className="grid gap-2">
              {legalData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(item.query)}
                  className="text-left w-full bg-gray-200 hover:bg-blue-200 px-3 py-2 rounded-md"
                >
                  {item.query}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white p-4 rounded shadow">
          <textarea
            className="w-full border border-gray-300 p-3 rounded mb-4"
            placeholder="Ask a legal question..."
            rows="4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Generating..." : "Submit"}
          </button>
        </div>

        {response && (
          <div className="mt-6 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Answer:</h2>
            <p className="mb-4">{response.answer}</p>

            {response.citations.length > 0 && (
              <>
                <h3 className="font-medium mb-1">Citations:</h3>
                {response.citations.map((cite, index) => (
                  <div key={index} className="mb-2 text-sm">
                    <p>🔖 {cite.text}</p>
                    <a
                      href={cite.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {cite.source}
                    </a>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
