---
layout: post
title: The Format Is the Message
date: 2026-04-12 10:00:00+0200
description: On how academic formatting tricks both humans and language models into believing misinformation.
tags: [NLP, misinformation, LLMs]
categories: research
lang: en
---

In early 2024, Almira Osmanovic Thunström uploaded two fake preprints to an academic repository under an alias. They described a fictional eye condition called bixonimania, attributed to a made-up researcher at a non-existent university. The papers explicitly said they were fake — one acknowledgements section thanked "Professor Sideshow Bob at Starfleet Academy", another stated outright that "this entire paper is made up". Within weeks, Copilot, Gemini, Perplexity, and ChatGPT were all describing bixonimania as a real disease. One of the fake papers was subsequently cited in a peer-reviewed journal article, which was later retracted.

The papers were obviously fake. They said so. It didn't matter.

---

What mattered was the format. Osmanovic Thunström's act stemmed from a research question which found that LLMs are significantly more likely to elaborate on misinformation when the source text is formatted like a clinical document (hospital discharge notes, academic papers) than when the same claim appears in a social media post. The wrapper did the persuasive work, not the argument.

This isn't a quirk of language models. Framing theory has been making this point about humans for decades: the form in which information is presented shapes how it is received, independently of its content. Academic formatting signals authority, peer review, institutional backing. That signal gets processed — by people and by models — before the content itself.

The bixonimania case just makes it unusually legible. A paper that announces its own falseness still got cited by a human researcher who, presumably, didn't read past the abstract, or trusted the format enough to skip that step.

---

What makes this a structural problem, not just a funny anecdote, is how training data is assembled. Carlini et al. describe a class of attacks they call *frontrunning poisoning*: an attacker who knows when a dataset is being scraped — say, a Common Crawl snapshot — only needs to be present at that moment. The content gets reverted or corrected later, but the snapshot is static. The poisoned version persists in the training data indefinitely.

Academic preprint servers have the same property. Content is indexed quickly, corrections come slowly, and there is no mechanism to retroactively update a model's weights when a paper is retracted. The bixonimania preprints have been taken down, and so has the original post on Medium.

---

The obvious takeaway is that format and register are not neutral containers for information — they are part of the message, and they carry trust that the content hasn't earned. This has always been true. What's new is that we've built systems that ingest text at scale without the social context that usually makes us skeptical: knowing the author, recognising the journal, having a colleague vouch for the work. LLMs don't have any of that. They have the formatting.


## References

- Carlini, N., Jagielski, M., Choquette-Choo, C. A., Paleka, D., Pearce, W., Anderson, H., Terzis, A., Thomas, K., & Tramèr, F. (2024). Poisoning web-scale training datasets is practical. *2024 IEEE Symposium on Security and Privacy (SP)*, 407–425. [https://doi.org/10.1109/SP54263.2024.00179](https://doi.org/10.1109/SP54263.2024.00179)

- Entman, R. M. (1993). Framing: Toward clarification of a fractured paradigm. *Journal of Communication*, 43(4), 51–58.

- Lakoff, G. (2004). *Don't Think of an Elephant! Know Your Values and Frame the Debate*. Chelsea Green Publishing.

- Omar, M., et al. (2026). [LLMs and medical misinformation]. *Lancet Digital Health*, 8, 100949. [https://doi.org/10.1016/j.landig.2025.100949](https://doi.org/10.1016/j.landig.2025.100949)

- Stokel-Walker, C. (2026). Scientists invented a fake disease. AI told people it was real. *Nature*. [https://www.nature.com/articles/d41586-026-01100-y](https://www.nature.com/articles/d41586-026-01100-y)
