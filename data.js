// 专四真题词汇库（用于点击查词）
const VOCABULARY = {
  // 2025年真题词汇
  "evolution": { phonetic: "/ˌiːvəˈluːʃn/", meaning: "n. 进化，演变", example: "the evolution of the human brain" },
  "brief": { phonetic: "/briːf/", meaning: "adj. 简短的 n. 简报", example: "a brief introduction" },
  "erosional": { phonetic: "/ɪˈroʊʒənl/", meaning: "adj. 侵蚀的", example: "erosional processes" },
  "agent": { phonetic: "/ˈeɪdʒənt/", meaning: "n. 代理人；作用因素", example: "a chemical agent" },
  "faithful": { phonetic: "/ˈfeɪθfl/", meaning: "adj. 忠实的，忠诚的", example: "faithful to the original" },
  "innovation": { phonetic: "/ˌɪnəˈveɪʃn/", meaning: "n. 创新，革新", example: "technological innovation" },
  "thereby": { phonetic: "/ˌðeəˈbaɪ/", meaning: "adv. 因此，从而", example: "He became a citizen, thereby gaining the right to vote." },
  "occasion": { phonetic: "/əˈkeɪʒn/", meaning: "n. 场合，时机", example: "on this special occasion" },
  "journey": { phonetic: "/ˈdʒɜːrni/", meaning: "n. 旅行，旅程", example: "a long journey" },
  "probability": { phonetic: "/ˌprɑːbəˈbɪləti/", meaning: "n. 可能性，概率", example: "in all probability" },
  "disappointed": { phonetic: "/ˌdɪsəˈpɔɪntɪd/", meaning: "adj. 失望的", example: "feel rather disappointed" },
  "legal": { phonetic: "/ˈliːɡl/", meaning: "adj. 法律的，合法的", example: "legal advice" },
  "consult": { phonetic: "/kənˈsʌlt/", meaning: "v. 咨询，请教", example: "consult a doctor" },
  "professional": { phonetic: "/prəˈfeʃənl/", meaning: "n. 专业人士 adj. 专业的", example: "a legal professional" },
  "emergency": { phonetic: "/ɪˈmɜːdʒənsi/", meaning: "n. 紧急情况，突发事件", example: "emergency services" },
  "battled": { phonetic: "/ˈbætld/", meaning: "v. 战斗，斗争（battle的过去式）", example: "battled the flames" },
  "flames": { phonetic: "/fleɪmz/", meaning: "n. 火焰，火舌", example: "battle the flames" },
  "nonstop": { phonetic: "/ˌnɑːnˈstɑːp/", meaning: "adv./adj. 不停地，不间断地", example: "work nonstop for days" },
  "advertising": { phonetic: "/ˈædvərtaɪzɪŋ/", meaning: "n. 广告，广告业", example: "in advertising" },
  "desirable": { phonetic: "/dɪˈzaɪərəbl/", meaning: "adj. 令人想要的，有吸引力的", example: "a desirable outcome" },
  "desirous": { phonetic: "/dɪˈzaɪərəs/", meaning: "adj. 渴望的（主语为人）", example: "be desirous of success" },
  "metaphor": { phonetic: "/ˈmetəfər/", meaning: "n. 隐喻，暗喻", example: "a metaphor for life" },
  "figure of speech": { phonetic: "/ˈfɪɡjər əv spiːtʃ/", meaning: "n. 修辞手法", example: "Metaphor is a figure of speech." },
  "ornamental": { phonetic: "/ˌɔːrnəˈmentl/", meaning: "adj. 装饰性的", example: "ornamental plants" },
  "conceptual": { phonetic: "/kənˈseptʃuəl/", meaning: "adj. 概念上的", example: "conceptual framework" },
  "abstract": { phonetic: "/ˈæbstrækt/", meaning: "adj. 抽象的 n. 摘要", example: "an abstract concept" },
  "concrete": { phonetic: "/ˈkɑːŋkriːt/", meaning: "adj. 具体的；混凝土的", example: "concrete evidence" },
  "correspondences": { phonetic: "/ˌkɔːrəˈspɑːndənsɪz/", meaning: "n. 对应关系；通信", example: "set up correspondences" },
  "nurturing": { phonetic: "/ˈnɜːrtʃərɪŋ/", meaning: "v. 培养，养育", example: "nurturing children" },
  "cultivating": { phonetic: "/ˈkʌltɪveɪtɪŋ/", meaning: "v. 培养，耕作", example: "cultivating friendships" },
  "mapping": { phonetic: "/ˈmæpɪŋ/", meaning: "n. 映射，绘制地图", example: "conceptual mapping" },
  "domain": { phonetic: "/doʊˈmeɪn/", meaning: "n. 领域，范围", example: "conceptual domains" },
  "properties": { phonetic: "/ˈprɑːpərtiz/", meaning: "n. 属性，特性", example: "chemical properties" },
  "coherence": { phonetic: "/koʊˈhɪrəns/", meaning: "n. 连贯性，一致性", example: "textual coherence" },
  "discrete": { phonetic: "/dɪˈskriːt/", meaning: "adj. 离散的，分开的", example: "discrete phenomena" },
  "phenomena": { phonetic: "/fəˈnɑːmɪnə/", meaning: "n. 现象（复数）", example: "natural phenomena" },
  "conceptualize": { phonetic: "/kənˈseptʃuəlaɪz/", meaning: "v. 概念化，形成概念", example: "conceptualize the world" },
  "fragmented": { phonetic: "/ˈfræɡməntɪd/", meaning: "adj. 碎片化的，零散的", example: "fragmented attention span" },
  "embrace": { phonetic: "/ɪmˈbreɪs/", meaning: "v. 拥抱；欣然接受", example: "embrace technology" },
  "intercultural": { phonetic: "/ˌɪntərˈkʌltʃərəl/", meaning: "adj. 跨文化的", example: "intercultural communication" },
  "negotiation": { phonetic: "/nɪˌɡoʊʃiˈeɪʃn/", meaning: "n. 协商，谈判", example: "negotiation of meaning" },
  "embedded": { phonetic: "/ɪmˈbedɪd/", meaning: "adj. 嵌入的，内嵌的", example: "embedded system" },
  "multilayered": { phonetic: "/ˌmʌltiˈleɪərd/", meaning: "adj. 多层次的", example: "multilayered contexts" },
  // 2024年真题词汇
  "intricate": { phonetic: "/ˈɪntrɪkət/", meaning: "adj. 错综复杂的", example: "an intricate pattern" },
  "prerequisite": { phonetic: "/ˌpriːˈrekwəzɪt/", meaning: "n. 先决条件", example: "a prerequisite for the course" },
  "substantial": { phonetic: "/səbˈstænʃl/", meaning: "adj. 大量的，实质的", example: "substantial evidence" },
  "deteriorate": { phonetic: "/dɪˈtɪriəreɪt/", meaning: "v. 恶化，变坏", example: "The situation deteriorated." },
  "indispensable": { phonetic: "/ˌɪndɪˈspensəbl/", meaning: "adj. 不可或缺的", example: "an indispensable tool" },
  "scrutinize": { phonetic: "/ˈskruːtənaɪz/", meaning: "v. 仔细检查", example: "scrutinize the document" },
  "plausible": { phonetic: "/ˈplɔːzəbl/", meaning: "adj. 貌似合理的", example: "a plausible explanation" },
  "redundant": { phonetic: "/rɪˈdʌndənt/", meaning: "adj. 多余的，冗余的", example: "redundant information" },
  "predominantly": { phonetic: "/prɪˈdɑːmɪnəntli/", meaning: "adv. 主要地，占主导地", example: "predominantly rural areas" },
  "conducive": { phonetic: "/kənˈduːsɪv/", meaning: "adj. 有益的，有助于...的", example: "conducive to learning" },
  "dilemma": { phonetic: "/dɪˈlemə/", meaning: "n. 困境，两难", example: "face a dilemma" },
  "advocate": { phonetic: "/ˈædvəkeɪt/", meaning: "v. 提倡 n. 倡导者", example: "advocate for change" },
  "profound": { phonetic: "/prəˈfaʊnd/", meaning: "adj. 深刻的，深远的", example: "a profound impact" },
  "resilience": { phonetic: "/rɪˈzɪliəns/", meaning: "n. 韧性，恢复力", example: "mental resilience" },
  "scrutiny": { phonetic: "/ˈskruːtəni/", meaning: "n. 仔细审查", example: "under close scrutiny" },
  "mitigate": { phonetic: "/ˈmɪtɪɡeɪt/", meaning: "v. 减轻，缓和", example: "mitigate the risks" },
  "inevitable": { phonetic: "/ɪnˈevɪtəbl/", meaning: "adj. 不可避免的", example: "an inevitable outcome" },
  "scrutinise": { phonetic: "/ˈskruːtɪnaɪz/", meaning: "v. 仔细检查（英式拼写）", example: "scrutinise the evidence" },
  "alleviate": { phonetic: "/əˈliːvieɪt/", meaning: "v. 减轻，缓解", example: "alleviate the pain" },
  "pervasive": { phonetic: "/pərˈveɪsɪv/", meaning: "adj. 普遍的，渗透的", example: "pervasive influence" },
  "assimilate": { phonetic: "/əˈsɪməleɪt/", meaning: "v. 吸收，同化", example: "assimilate new ideas" },
  "notwithstanding": { phonetic: "/ˌnɑːtwɪθˈstændɪŋ/", meaning: "prep./adv. 尽管", example: "Notwithstanding the difficulties, ..." },
  "commence": { phonetic: "/kəˈmens/", meaning: "v. 开始，着手", example: "commence the project" },
  "eminent": { phonetic: "/ˈemɪnənt/", meaning: "adj. 杰出的，卓越的", example: "an eminent scholar" },
  "imminent": { phonetic: "/ˈɪmɪnənt/", meaning: "adj. 即将发生的", example: "imminent danger" },
};

// ==================== 2025年真题 ====================
const TEM4_2025 = {
  year: 2025,
  title: "2025年英语专业四级真题",
  
  // PART III LANGUAGE USAGE (Q11-30)
  languageUsage: [
    {
      id: "2025_11",
      stem: "She thought it advisable that a janitor ______ against any possible intruder.",
      options: { A: "is guarding", B: "guards", C: "was guarding", D: "guard" },
      answer: "D",
      explanation: "在'it is advisable that...'句型中，that从句要用虚拟语气，即(should) + 动词原形。guard是省略should后的动词原形形式。类似结构还有：essential/important/necessary that..."
    },
    {
      id: "2025_12",
      stem: "Lisa managed to save ______ she could out of her salary to help her sister.",
      options: { A: "what little money", B: "such little money", C: "such many money", D: "how little money" },
      answer: "A",
      explanation: "what little money = 那一点点钱，what在这里是关系形容词，相当于'the...that'。such不能用于此结构，money是不可数名词不能用many修饰。"
    },
    {
      id: "2025_13",
      stem: "What leaves me with the deepest impression in the park is a(n) ______ trunk.",
      options: { A: "brown charming Italian oak", B: "Italian charming brown oak", C: "brown Italian charming oak", D: "charming brown Italian oak" },
      answer: "D",
      explanation: "形容词顺序规则：观点/评价(charming) → 颜色(brown) → 国籍/产地(Italian) → 材质(oak)。这是英语中多项形容词修饰名词的固定语序。"
    },
    {
      id: "2025_14",
      stem: "A more flexible means of communication is always an advantage, ______ things being equal.",
      options: { A: "all the things", B: "the other things", C: "all the things", D: "all other things" },
      answer: "D",
      explanation: "all other things being equal 是固定表达，意为'在其他条件相同的情况下'，是独立主格结构。"
    },
    {
      id: "2025_15",
      stem: "If you would kindly agree to the terms, we'll send you the samples right away. The underlined word indicates ______.",
      options: { A: "a polite request", B: "an uncertainty", C: "an unexpected result", D: "a useful suggestion" },
      answer: "A",
      explanation: "would在条件句中表示礼貌的请求，相当于'如果您愿意...'，语气比will更委婉客气。"
    },
    {
      id: "2025_16",
      stem: "My mother would have been in Beijing by now if she had not missed the train. The underlined part in the sentence expresses a(n) ______.",
      options: { A: "obligation", B: "willingness", C: "hypothetical", D: "suggestion" },
      answer: "C",
      explanation: "would have been + if...had not... 是典型的虚拟语气，表示与过去事实相反的假设。妈妈实际上错过了火车，所以'本应在北京'是假设情况。"
    },
    {
      id: "2025_17",
      stem: "One can never be happy if one is always envious ______ others.",
      options: { A: "at", B: "of", C: "to", D: "on" },
      answer: "B",
      explanation: "be envious of... = 嫉妒/羡慕...，是固定介词搭配。类似表达：be jealous of。"
    },
    {
      id: "2025_18",
      stem: "\"It is taking forever to upload an album.\" The underlined part expresses ______.",
      options: { A: "regret", B: "surprise", C: "complaint", D: "temporariness" },
      answer: "C",
      explanation: "is taking forever 字面意思是'要花永远那么久'，是一种夸张的抱怨表达，暗示上传速度太慢。"
    },
    {
      id: "2025_19",
      stem: "\"If you frequently forget where you parked your car, there is an app that could be what you're looking for.\" The underlined word expresses ______.",
      options: { A: "ability in the present", B: "possibility at present", C: "certainly at the past", D: "possibility in the past" },
      answer: "B",
      explanation: "could在此表示现在的可能性，意为'可能、或许'。这里不是在讲过去的能力，而是说这个app'可能'是你需要的。"
    },
    {
      id: "2025_20",
      stem: "Firms that use computers have found that the number of staff ______ is needed for quality control can be substantially reduced.",
      options: { A: "who", B: "as", C: "that", D: "what" },
      answer: "C",
      explanation: "that引导定语从句修饰staff。虽然staff指人，但在'the number of staff'这个结构中，用that引导定语从句更常见。who也可以指人，但这里that更合适。"
    },
    {
      id: "2025_21",
      stem: "Ann hurried back, having a guilty ______ at leaving her daughter at home alone.",
      options: { A: "concern", B: "cogitation", C: "contemplation", D: "consciousness" },
      answer: "D",
      explanation: "guilty consciousness = 内疚感/罪恶感。have a guilty consciousness at/about doing sth 是固定搭配。其他选项：concern(关心)、cogitation(沉思)、contemplation(沉思)语义不匹配。"
    },
    {
      id: "2025_22",
      stem: "Your earnings will be in ______ to the amount of work you do.",
      options: { A: "addition", B: "percentage", C: "relation", D: "proportion" },
      answer: "D",
      explanation: "in proportion to = 与...成比例。你的收入将与工作量成正比。in relation to意为'关于、与...有关'，语义不如proportion精确。"
    },
    {
      id: "2025_23",
      stem: "This drink is very tasty, and it is nutritious as well, as it is ______ with vitamin C.",
      options: { A: "enriched", B: "strengthened", C: "increased", D: "consolidated" },
      answer: "A",
      explanation: "be enriched with = 富含/添加了...。食物/饮料中添加营养素用enrich。strengthen(加强力量)、increase(增加数量)、consolidate(巩固)均不适用于此语境。"
    },
    {
      id: "2025_24",
      stem: "The discovery of the New World is a ______ in the world history.",
      options: { A: "landmark", B: "standard", C: "recognition", D: "triumph" },
      answer: "A",
      explanation: "landmark = 里程碑、标志性事件。新大陆的发现是世界史上的里程碑事件。standard(标准)、recognition(认可)、triumph(胜利)语义不符。"
    },
    {
      id: "2025_25",
      stem: "It is ______ to keep a note of these important data, so we won't lose them.",
      options: { A: "sensitive", B: "sensational", C: "sensible", D: "senseless" },
      answer: "C",
      explanation: "sensible = 明智的、合理的。记下重要数据是明智的做法。sensitive(敏感的)、sensational(轰动的)、senseless(无意义的)语义不符。"
    },
    {
      id: "2025_26",
      stem: "I don't think that was a mistake; I think it was ______ made so.",
      options: { A: "methodically", B: "accidentally", C: "carelessly", D: "deliberately" },
      answer: "D",
      explanation: "deliberately = 故意地。前面说不是错误，后面说明是故意为之。methodically(有条理地)、accidentally(偶然地)、carelessly(粗心地)均不符合逻辑。"
    },
    {
      id: "2025_27",
      stem: "You need to contact your doctor if the symptoms ______ for a day.",
      options: { A: "perceive", B: "persist", C: "illustrate", D: "perplex" },
      answer: "B",
      explanation: "persist = 持续存在。如果症状持续一天就需要联系医生。perceive(感知)、illustrate(说明)、perplex(使困惑)语义不符。"
    },
    {
      id: "2025_28",
      stem: "There is a strong ______ between the father and the son.",
      options: { A: "attraction", B: "reflection", C: "resemblance", D: "correspondence" },
      answer: "C",
      explanation: "resemblance = 相似、相像。父子之间很相像。attraction(吸引力)、reflection(反射/反思)、correspondence(通信/对应)语义不符。"
    },
    {
      id: "2025_29",
      stem: "The smartphone manufacturer blamed ______ batteries for last year's humiliating recall of its flagship smartphone.",
      options: { A: "wrong", B: "faulty", C: "mistaken", D: "incorrect" },
      answer: "B",
      explanation: "faulty batteries = 有缺陷的电池。faulty指产品有缺陷、故障。wrong指道德或事实上错误，mistaken指判断错误，incorrect指不正确，均不如faulty贴切。"
    },
    {
      id: "2025_30",
      stem: "While he says his next job won't be a head coach for the current team, he's ______ several possibilities, including working overseas.",
      options: { A: "recollecting", B: "enjoying", C: "reconciling", D: "entertaining" },
      answer: "D",
      explanation: "entertain possibilities/ideas = 考虑可能性。entertain在此意为'怀有、考虑'。recollecting(回忆)、enjoying(享受)、reconciling(调和)语义不符。"
    }
  ],

  // PART IV CLOZE (Q31-40)
  cloze: {
    wordBank: [
      { key: "A", word: "applied" }, { key: "B", word: "associatively" },
      { key: "C", word: "coherence" }, { key: "D", word: "conceptualize" },
      { key: "E", word: "concrete" }, { key: "F", word: "feature" },
      { key: "G", word: "jointly" }, { key: "H", word: "narrate" },
      { key: "I", word: "ornamental" }, { key: "J", word: "readily" },
      { key: "K", word: "separating" }, { key: "L", word: "style" },
      { key: "M", word: "supplementary" }, { key: "N", word: "sustaining" },
      { key: "O", word: "used" }
    ],
    passage: "Traditionally, the subject of metaphor tends to come up in literature classes where everyone learns that a metaphor is a language. Metaphors are not taught to stand in isolation at first, but we're taught to recognize them in poetic language. Metaphors are first brought to our attention primarily as an element of (31)________, way to position stories and songs to \"She's the moon in her eyes.\" Consequently, many people associate metaphors most (32)________ with the literary arts and understand them as a matter of language — a figure of speech. Whether (33)________ or conceptual, metaphors are acts of imagination. To see a thing in terms of another is to think through metaphor for the discovery and connecting ideas.\n\nMetaphorical thinking (34)________. That is, we set up correspondences between two concepts. This involves (35)________ our understanding of an abstract object, for example, by seeing it in terms of a rather tangible object (say, a garden). The process of setting up such correspondences is called \"mapping.\" By mapping \"tending to\" our friendships. This we can think about like cultivating a garden; (36)________ and give visible forms to an abstract idea. Two (37)________ conceptual domains, we invent a comparison, that can be (38)________ to \"love,\" the target domain. The source metaphor, both conventional and unconventional, all we belong to everyone. Metaphor is very much involved in the way they (39)________ talk about, and most of all, belong to and claim to (39)________ among other disjointed phenomena. The habit of metaphorical thinking, and (40)________ to the world.",
    answers: { 31: "L", 32: "J", 33: "I", 34: "D", 35: "N", 36: "F", 37: "K", 38: "A", 39: "C", 40: "G" },
    explanations: {
      31: "style = 风格。隐喻首先是作为风格元素被我们注意的，'an element of style'。",
      32: "readily = 容易地、自然地。人们很自然地将隐喻与文学艺术联系在一起。",
      33: "ornamental = 装饰性的。无论是装饰性的还是概念性的，隐喻都是想象的行为。与conceptual并列。",
      34: "conceptualize = 概念化。隐喻性思维将事物概念化，建立概念之间的对应关系。",
      35: "sustaining = 维持、支撑。这涉及通过具体事物来维持我们对抽象对象的理解。",
      36: "feature = 特征、特色。通过映射，我们赋予抽象概念可见的形式和特征。",
      37: "separating = 分开的。两个原本分离的概念领域之间建立映射。",
      38: "applied = 应用。从源域提取的属性可以被应用到目标域。",
      39: "coherence = 连贯性。隐喻在离散现象之间建立连贯性。",
      40: "jointly = 联合地、共同地。隐喻性思维的习惯，以及共同与世界相关联。"
    }
  },

  // PART II SECTION B — Conversation One (Q1-5)
  conversationOneScript: `W: Hello, welcome to Dream Fitness and Health Center. How can I help you?
M: Yes, I've been meaning to come and get some information for a while. I was wondering if you could help me?
W: Sure, of course. What would you like to know?
M: I saw on the sign outside you offer the best budget membership in the city. Is that right?
W: That's correct. If you find a cheaper deal elsewhere, we'll match it. Also, we charge no sign-up fees or cancellation fees.
M: Sorry, what was that last part?
W: Cancellation fees. Many gyms fine members if they quit before a minimum contract period. We don't do that.
M: That's good to know. What are your opening hours?
W: We open at 5 AM and close at midnight.
M: So not 24 hours then.
W: Almost, but we tried round-the-clock service before, and very few people worked out at 2 a.m., so we stopped.
M: Makes sense. Another question: do you provide personal trainers? Like customized fitness assessments?
W: Absolutely. As our brochure states, trainers will show you what exercises to do, how to do them, and the reasons behind each workout. Have you worked with a personal trainer before?
M: No, never.
W: It's straightforward. For your first several visits, we'll assign an expert personal trainer. They will design a fully tailored exercise plan and demonstrate every movement for you.
M: Let me confirm: all this is included in the membership price?
W: Yes, it is. Nutrition guidance is separate, though. If you want ongoing nutrition coaching after the introductory sessions, there will be extra charges.
M: Okay, that sounds great.
W: Any other questions?
M: Yeah, why should I pick your gym over others in town?
W: Apart from our low prices and one-on-one trainer support?
M: Exactly.
W: Here's a free one-day pass. Why not come back later to check everything out? You can chat with other members, look at our facilities and meet the staff yourself.
M: Alright, I will. Thanks a lot.`,
  conversationOne: [
    { id: "conv1_1", stem: "Where did the man get the membership information?", options: { A: "From a friend.", B: "From a brochure.", C: "From the sign outside.", D: "From a TV advertisement." }, answer: "C", explanation: "男士说 'I saw on the sign outside you offer the best budget membership in the city.' 他是通过外面的标识了解到会员信息的。" },
    { id: "conv1_2", stem: "Which fees does this gym charge its members?", options: { A: "Sign-up fees.", B: "Cancellation fees.", C: "Membership fees only.", D: "Both sign-up and cancellation fees." }, answer: "C", explanation: "女士明确说 'we charge no sign-up fees or cancellation fees'，因此只收取会员费。" },
    { id: "conv1_3", stem: "How long is the gym open each day?", options: { A: "10 hours.", B: "19 hours.", C: "24 hours.", D: "12 hours." }, answer: "B", explanation: "营业时间是早上5点到午夜(24点)，共19小时。女士说'not 24 hours'。" },
    { id: "conv1_4", stem: "What can we learn about the exercise plan provided by the trainer?", options: { A: "It is fully tailored to the member.", B: "It is a standard plan for all.", C: "It focuses on nutrition only.", D: "It requires extra payment." }, answer: "A", explanation: "教练会设计'fully tailored exercise plan'(完全定制的锻炼计划)，且包含在会员费中。" },
    { id: "conv1_5", stem: "When does the man need to pay extra fees?", options: { A: "When he uses the facilities.", B: "When he wants ongoing nutrition coaching.", C: "When he works with a trainer.", D: "When he brings a guest." }, answer: "B", explanation: "营养指导是单独收费的，如果在新手阶段后继续需要营养指导，需要额外付费。" }
  ],

  // PART II SECTION B — Conversation Two (Q6-10)
  conversationTwoScript: `W: Hello Mark, you mentioned you studied automotive engineering, right?
M: Yeah, that's correct.
W: Could you explain what automotive engineering covers?
M: It's basically vehicle design technology, including engines, performance, aerodynamics — it covers all technical aspects of future cars.
W: Cool, so you must know a lot about future vehicles. What do cars look like in 20 or 40 years from now?
M: In the near term, the biggest progress will be alternative fuels. Fossil fuel resources will eventually run out, so the industry will shift to electric and hybrid vehicles, and possibly hydrogen fuel cells.
W: How far off do you think that future is?
M: Major automakers already produce electric cars, and many people drive them daily. But it will take years for them to fully replace gasoline vehicles.
W: I once met an engineering student who said self-driving autonomous cars already exist. You just input your destination, and the car drives itself. Have you heard of that?
M: I've seen technology demos from several companies. The tech itself is impressive, but public mindset is the main barrier. People enjoy the sense of freedom that comes with driving their own car.
W: Right.
M: If a car drives you automatically, you lose that feeling — it's like riding a train. You give up individual driving freedom.
W: That's a really good point.
M: Infrastructure is another big obstacle.
W: So you think self-driving cars will never become mainstream, and people will always want to drive themselves?
M: Possibly. But we might build a system where self-driving vehicles operate only in inner cities to ease traffic jams and congestion.
W: Got it.
M: So autonomous transport could work inside cities, but on rural country roads, people will still want the thrill and excitement of manual driving.
W: Makes sense. I've seen flying and underwater cars in sci-fi movies. Do you think those will exist someday?
M: Underwater cars seem impractical and demand extremely complex engineering. The technology is theoretically possible, but production costs would be astronomical. Flying cars may arrive hundreds of years later, but definitely not within my lifetime.
W: Alright, thanks for sharing your insights, Mark.`,
  conversationTwo: [
    { id: "conv2_6", stem: "According to the man, what fields are covered in automotive engineering?", options: { A: "Engines, performance and aerodynamics.", B: "Only engine design.", C: "Only vehicle appearance.", D: "Fuel production only." }, answer: "A", explanation: "男士说汽车工程包括 'vehicle design technology, including engines, performance, aerodynamics'，涵盖引擎、性能和空气动力学。" },
    { id: "conv2_7", stem: "According to the man, what sense will people lose with self-driving cars?", options: { A: "Sense of safety.", B: "Sense of freedom.", C: "Sense of direction.", D: "Sense of speed." }, answer: "B", explanation: "男士说 'If a car drives you automatically, you lose that feeling...You give up individual driving freedom.' 人们会失去自由感。" },
    { id: "conv2_8", stem: "Where does the man suggest self-driving cars be used?", options: { A: "On highways.", B: "On rural country roads.", C: "In inner cities.", D: "In suburban areas." }, answer: "C", explanation: "男士说 'self-driving vehicles operate only in inner cities to ease traffic jams and congestion'，建议在市中心使用。" },
    { id: "conv2_9", stem: "What feeling do drivers get on country roads?", options: { A: "Boredom.", B: "Thrill and excitement.", C: "Fear.", D: "Calmness." }, answer: "B", explanation: "男士说 'on rural country roads, people will still want the thrill and excitement of manual driving'，乡村道路上人们追求手动驾驶的刺激。" },
    { id: "conv2_10", stem: "What is the main topic of this conversation?", options: { A: "The history of cars.", B: "How to repair cars.", C: "The future of cars.", D: "Electric car prices." }, answer: "C", explanation: "对话围绕未来汽车展开，讨论了替代燃料、自动驾驶、飞行汽车和水下汽车等话题，主题是汽车的未来。" }
  ],

  // PART V SECTION A — Reading Comprehension (Q41-50)
  reading: {
    passages: [
      {
        title: "PASSAGE ONE — Inter-generational Care",
        paragraphs: [
          "(1) Six months before she died, my grandmother moved into an old people's home and I visited her there. She was sitting in the living room with about fifteen other residents, mostly women, half of them asleep. The room was clean and warm, with flowers and pictures, and the care assistants were kind and cheerful. People only moved when they needed to be helped to the bathroom. It was depressing. Grandmother talked a lot about how much she missed seeing her grandchildren, but I knew from my sister that they hated going to visit her there, and to be perfectly honest, I couldn't blame them a bit myself.",
          "(2) So I was interested to read a newspaper article about a new concept in old people's homes. The idea is simple, but revolutionary: combining a residential home for the elderly with a nursery school in the same building. The children and the residents eat lunch together and share activities such as music, painting, gardening and caring for the pets which the residents are encouraged to keep. In the afternoons, the residents enjoy reading or telling stories to the children, and if a child is feeling sad or there are always a kind lap to sit on and a cuddle. There are trips out and birthday parties too.",
          "(3) The advantages are enormous for everyone concerned. The children are happy because they get a lot more individual attention and respond well because someone has time for them. They also learn to accept old people and not afraid of frightening in any way. And of course, they see illness and death and learn to accept them. The residents are happy because they feel useful and needed. They are more active and more interested in life when the children are around and they take more interest in their appearance too. And the staff are happy because they see an improvement in the physical and psychological health of the residents.",
          "(4) Nowadays there is a lot less contact between old parents and the young. There are many reasons for this, including the breakdown of the extended family, working parents with no time to care for ageing relations, families that have moved away and smaller flats with no room for grandparents. But the result is the same: many old people are lonely and feel useless, along with more and more families with young children who desperately need more support. It's a major problem in modern societies.",
          "(5) That's why inter-generational programmes, designed to bring the old and the young together, are growing in popularity all over the world, supported by UNESCO and other local and international organisations. There are examples of successful initiatives all over the world. Using young people to teach IT skills to older people is one example. Using old people as volunteer assistants in schools is another, perhaps reading with children who are a little behind their peers.",
          "(6) But it isn't only individuals who can gain from inter-generational activities. The advantages to society are enormous too. If older people can understand and accept the youth of today, and vice versa, there will be less conflict in a community. In a world where the number of old people is increasing, we need as much understanding and tolerance as possible. Modern society needs the strengths of one generation to help another. Then perhaps old people won't really feel isolated, and we can put an end to loneliness. We can also rediscover what \"community\" really means."
        ],
        questions: [
          { id: "2025_r41", num: 41, stem: "What does \"it\" in Para.1 refer to?", options: { A: "The atmosphere.", B: "The decoration.", C: "The nursery.", D: "The bathroom." }, answer: "A", explanation: "Para.1 最后一句 'It was depressing.' 中的 it 指代前文描述的养老院的整体氛围(atmosphere)，包括老人们半睡半醒的状态。" },
          { id: "2025_r42", num: 42, stem: "Which of the following statement is INCORRECT according to Para.3?", options: { A: "Children get more attention than in the ordinary.", B: "Old people have a sense of usefulness.", C: "The old pay more interest in appearance.", D: "Staff notice improvement in the residents." }, answer: "A", explanation: "Para.3中提到孩子们获得更多个别关注，但未与'ordinary'进行比较说'比平时更多'。其余三个选项在Para.3中均有明确提及。" },
          { id: "2025_r43", num: 43, stem: "The author uses ______ to explain the programme's popularity in Para.5.", options: { A: "comparison", B: "contrast", C: "cause and effect", D: "exemplification" }, answer: "D", explanation: "Para.5中作者通过举例(exemplification)来说明代际项目的普及：年轻人教老人IT技能、老人做学校志愿者等。" },
          { id: "2025_r44", num: 44, stem: "The following are the advantages of inter-generational activities EXCEPT ______.", options: { A: "redefining the meaning of community", B: "promoting mutual understanding and help", C: "reducing conflicts between generations", D: "slowing down the process of isolation" }, answer: "D", explanation: "A、B、C在Para.6中均有提及。文章说的是'put an end to loneliness'(结束孤独)，而非'减缓(slowing down)隔离过程'。" }
        ]
      },
      {
        title: "PASSAGE TWO — Uncle Chil",
        paragraphs: [
          "(1) My father's youngest brother, Uncle Chil, shared the Lee's famously bad reaction to liquor, which was to turn belligerent. After a few glasses of wine and gin, all the spiciness would come to the surface. Only Mother, with the one exception of my mother, we all appreciated his rough language. If they were ever alone together, say in the kitchen after dinner, he would use the most decorous voice in asking for a glass or a fresh bucket of ice, and even offer to help load the dishwasher or run an errand in the store.",
          "(2) On one of those nights we had the conversation that eventually turned in toward my parents. It had partly my mother's work, how much she had invested in me. I answered with some criticism of him that she said was too outspoken and overbearing. He started at me, with a harsh solemnity I had not heard from him before. My mother had always been one of those most loved by all the world. She despised her varied personal influences, always planned for the long run and practiced her own variation of the golden rule.",
          "(4) My father could defend his pride. Uncle Chil had a history of working hard only when reward was well within sight, like any kind of weak will. Each of a pool table, his old brothers all respected in professions and academics. Uncle Chil had left Korea after a series of failed ventures and had moved overseas, and found practice in Vancouver.",
          "(5) My parents argued fiercely and my father left the kitchen. But as was my mother's way, she kept on about his present job, hauling and cleaning produce for a greengrocer. He would get to the store at 4 a.m., to unload for the day's shopping. Uncle Chil was a poor risk and even now the money on the apartment, vegetables and infant's daughter were still in Seoul, waiting for him to make enough money to send for them."
        ],
        questions: [
          { id: "2025_r45", num: 45, stem: "Uncle Chil had a(n) ______ attitude towards the author's mother.", options: { A: "critical", B: "a strong prejudice against", C: "mixed feelings", D: "overbearing" }, answer: "C", explanation: "Uncle Chil对作者母亲态度复杂：他在她面前表现得彬彬有礼(decorous voice)，但同时也有批评。整体呈现混合情感(mixed feelings)。" },
          { id: "2025_r46", num: 46, stem: "We can infer from the passage that the author's mother was NOT ______.", options: { A: "approachable", B: "independent", C: "broad-minded", D: "overbearing" }, answer: "D", explanation: "文中描述母亲受人爱戴、独立、有长远规划、践行自己的golden rule，但并未表现出专横(overbearing)。相反Uncle Chil被描述为overbearing。" },
          { id: "2025_r47", num: 47, stem: "We learn from the passage that Uncle Chil was a(n) ______ person.", options: { A: "stubborn", B: "unsuccessful", C: "helpful", D: "adaptive" }, answer: "B", explanation: "文中描述Uncle Chil经历了一系列失败的投资(failed ventures)，做着一份搬运清洁农产品的工作，是个poor risk，说明他是不成功的(unsuccessful)。" }
        ]
      },
      {
        title: "PASSAGE THREE — Orchids",
        paragraphs: [
          "(1) Deep in the jungles of Colombia there is a kind of flower that attracts bees with its unique perfume. In a vine that only blooms for a few days. There is a large pink and yellow flower. Few growers ever find it, though, since it only blooms for a few days. That only grows in a very specific part of the state of Florida. It also only grows on trees, and wind or birds may spread its seeds. These flowers are some of the most rare and delicate species in all of nature. They are all types of orchids (兰花).",
          "(2) For hundreds of years orchids have been prized by discoverers, explorers, and adventurers. In the 1800s orchid hunters became popular in Europe, which made them very valuable. Many orchid hunters set out in the 1800s to find and collect these fragile plants. Orchids have long been valued for their beauty, but they may be even more important to science and our understanding of evolution.",
          "(3) Unlike plants that can self-pollinate, orchids need a very specific set of birds or bugs to spread their pollen. The process by which insects or birds spread the genetic material of different flowers is called pollination. Pollen is a powder produced by the flower's stigma which contains all the genetic material for the plant to reproduce. The pollen must be physically moved to another flower's seed.",
          "(4) Orchids evolved a vast array of insect attractors. Many orchid families smell like something to lure insects. Some orchids smell like fruit, others smell like chocolate, and some attract specific insects, such as bees, beetles or flies. Some orchids smell like pure cedar, some like vanilla, and some like organic meat. All these kinds of insect or bird insects that visit their flowers.",
          "(5) More kinds of species than any other flower series, orchid species number are still being found worldwide. That is according to NOVA, a science television series, \"the plant family has more than 25,000 varieties.\"",
          "(6) Orchids and the insects that pollinate them are one of the most amazing examples of evolution. Though pollinators depend on the orchids as a part of their habitat, each species are specialized to each other's very specific pollinator. Research suggests that certain species of orchid evolved specifically to attract one orchid bee. The degree of evolutionary specialisation is still very impressive."
        ],
        questions: [
          { id: "2025_r48", num: 48, stem: "What does the word \"prized\" in Para.2 mean?", options: { A: "To synthesize.", B: "To create.", C: "Selected.", D: "Valuing." }, answer: "D", explanation: "prized 在此意为'珍视、重视'(valued highly)。Para.2说兰花几百年来一直被探险者和发现者所珍视。" },
          { id: "2025_r49", num: 49, stem: "How do orchids reproduce according to Para.3?", options: { A: "They are all pollinated by birds or insects.", B: "They are self-pollinated to have seeds.", C: "They only pollinated by the wind.", D: "They are self-contained and rely on humans." }, answer: "A", explanation: "Para.3明确指出兰花需要特定的鸟类或昆虫来传播花粉，不像可以自花授粉的植物。" },
          { id: "2025_r50", num: 50, stem: "We can infer from the passage that orchids attract insects in ______ ways.", options: { A: "mysterious", B: "similar", C: "varied", D: "efficient" }, answer: "C", explanation: "Para.4描述了兰花吸引昆虫的多种方式：水果味、巧克力味、香草味等，因此是多种多样的(varied)。" }
        ]
      }
    ],
    // SECTION B Short Answer Questions (Q51-55)
    shortAnswers: [
      { id: "2025_sa51", num: 51, stem: "Why is the idea revolutionary for old people (Para.2)?", reference: "Combining a residential home with a nursery school." },
      { id: "2025_sa52", num: 52, stem: "Explain the example of mother's principles of conduct.", reference: "Treat others well, not just oneself; practice the golden rule." },
      { id: "2025_sa53", num: 53, stem: "Cite one thing in which Uncle Chil is weak in (Para.4 & 5).", reference: "Working hard only when reward is within sight; failed ventures." },
      { id: "2025_sa54", num: 54, stem: "What does the word \"tricking\" (Para.6) mean?", reference: "Deceiving / fooling insects into collecting pollen." },
      { id: "2025_sa55", num: 55, stem: "What does the passage imply about orchid evolution?", reference: "Highly specialized co-evolution between orchids and their pollinators." }
    ]
  },

  // PART I DICTATION
  dictation: {
    title: "Ecological Conservation of the Yellow River",
    passage: "China has made remarkable progress in the ecological conservation of the Yellow River. In the Yellow River basin, the proportion of surface water rated at grades 1 to 3 in the country's water quality system reached 87.5% last year, a significant increase from the previous year. Continued efforts have gone into ecological protection along the river in recent years, with a protection law coming into effect next year.",
    instructions: "Listen to the following passage. Altogether the passage will be read to you four times. During the first reading, which will be done at normal speed, read and try to understand the meaning. For the second and third readings, the passage will be read sentence by sentence, or phrase by phrase, with intervals of 15 seconds. The last reading will be read at normal speed again and during this time, you should check your work. You will then be given ONE minute to check your work once more."
  },

  // PART II SECTION A — TALK (听力填空)
  listeningTalk: {
    title: "Intercultural Communication",
    // 听力脚本（完整Talk原文）
    script: `Good morning everyone. Today we're going to talk about intercultural communication. With rapid changes in the global economy, technology and transportation systems, the world is becoming a small and intersecting community. We are having increased contact with people from different parts of the world, and they are culturally different. They bring with them different work habits and cultural practices. For example, cultural strangers may use different approaches to solve problems or have different nonverbal emotional expressions. They may develop friendships with different expectations, and they may also have different emphasis in an intercultural encounter. In fact, people are now constantly moving across borders. Neighborhoods and communities are changing. Thus, in what was once a homogeneous community, we may now find more diversity and cultural values.

So what is intercultural communication? Well, it can be defined as a symbolic exchange process. In this process, individuals from two or more different cultural communities attempt to negotiate shared meanings in a kind of interactive situation within an embedded societal system. Now let's look at some of the key words in that definition, as well as the major characteristics of intercultural communication: symbolic exchange process, different cultural communities, negotiating shared meanings, and an embedded societal system.

The first characteristic is symbolic exchange. It refers to the use of verbal and nonverbal symbols between two or more individuals to accomplish shared meanings. Verbal symbols represent the spoken or written aspects of our message exchange process, and non-verbal symbols or cues such as smiles represent another aspect of our message exchange process. Spoken or written communication carries the content information we want to convey. One important point: verbal messages always include nonverbal cues such as accents, intonations, and volume.

The second characteristic is process. This refers to the interdependent nature of the intercultural encounter. Once two cultural strangers make contact and attempt to communicate, they enter a mutually interdependent relationship. Let me give you an example: a Japanese businessperson may bow, while a European businessperson may prepare to shake hands. The two may quickly adjust their nonverbal greeting rituals to adapt to each other.

The third characteristic is different cultural communities. This is a broad concept. A cultural community means a group of interacting individuals within a bounded unit who share a set of traditions and ways of life. The bounded unit can be a geographic location with clear borders, such as a nation. It can also refer to people sharing beliefs and values even if they live worldwide. Broadly speaking, a cultural community can mean a national cultural group, an ethnic group, or a gender group.

The fourth characteristic, negotiating shared meanings, is the general goal of any intercultural communication encounter. For instance, in cross-cultural business talks, the primary concern is to ensure messages are understood to build common ground.

The fifth characteristic is societal embedded system. It refers to multi-layered contexts shaping intercultural communication, including history and politics. These contexts affect the whole process and final results of cross-cultural interaction.

Okay, to sum up, today we briefly covered the definition and major characteristics of intercultural communication. Hope this helps you better understand this topic. Thank you.`,
    items: [
      { id: 1, answer: "intercultural communication", hint: "讲座主题" },
      { id: 2, answer: "symbolic exchange process", hint: "跨文化沟通的定义" },
      { id: 3, answer: "different cultural communities", hint: "定义中的关键词之一" },
      { id: 4, answer: "negotiating shared meanings", hint: "定义中的关键词之一" },
      { id: 5, answer: "embedded societal system", hint: "定义中的关键词之一" },
      { id: 6, answer: "verbal and nonverbal symbols", hint: "第一个特征：符号交换涉及什么" },
      { id: 7, answer: "interdependent", hint: "第二个特征：跨文化接触的性质" },
      { id: 8, answer: "traditions and ways of life", hint: "第三个特征：文化社区共享什么" },
      { id: 9, answer: "build common ground", hint: "第四个特征：跨文化商务谈判的主要目标" },
      { id: 10, answer: "multi-layered contexts", hint: "第五个特征：社会嵌入系统指什么" }
    ]
  },

  // PART VI WRITING
  writing: {
    title: "Fragmented Style of Learning",
    prompt: "Read carefully the following excerpt on the fragmented style of learning, and then write your response in NO LESS THAN 200 WORDS, in which you should:\n● summarize the main message of the excerpt, and then\n● comment on the fragmented style of learning from your own perspective.\n\nMarks will be awarded for content relevance, content sufficiency, organization and language quality.",
    excerpt: "As far as technology is concerned, the world has changed for our generation, and as parents, teachers, and educators, we are now living in a fast-paced age of constant information.\n\nThe average 14-year-old now absorbs five hours' worth of content for every hour that they are receiving information.\n\nHow is this killing our kids' reading habits and ruining his homework. Within an hour he has absorbed more information than you could absorb in a whole afternoon, all just flipping through his phone.\n\nOur kids' skill at multi-tasking is just mixing together different things, it does not increase their speed of absorbing each exactly the same amount of time as you might believe to think; it takes in separate pieces of information at each tiny snippet, and while the human brain has the ability to encode and absorb bits and pieces of text, but the child's brain is not used to long linear thinking, so their learning is fragmented, they have fragmented attention span to the next thing. But the speed of screen and which they lose in learning, they have a fragmented attention span to the next fragment of learning, and so many longer is their sustained thinking.\n\nDon't look at the computer; instead be creative and show your child more interesting things to look at on the computer.\n\nNowadays Social media. Let's go out for walks together outdoors by cycling, and maybe we will all learn things in other ways. Let's not rely on various tools to access to our culture or to travel on a tree all alone; we have thousands of ways.",
    time: 45
  }
};

// ==================== 2024年真题 ====================
const TEM4_2024 = {
  year: 2024,
  title: "2024年英语专业四级真题",
  
  languageUsage: [
    {
      id: "2024_11",
      stem: "The detective spent hours ________ the evidence for any overlooked details.",
      options: { A: "scrutinizing", B: "scanning", C: "glancing", D: "observing" },
      answer: "A",
      explanation: "scrutinize = 仔细检查、审查，强调细致入微地检查。scan = 浏览/扫描，glance = 瞥一眼，observe = 观察（不够细致）。侦探需要仔细检查证据，scrutinizing最合适。"
    },
    {
      id: "2024_12",
      stem: "A good command of English is ________ for this position, so all applicants must demonstrate proficiency.",
      options: { A: "indispensable", B: "substantial", C: "plausible", D: "redundant" },
      answer: "A",
      explanation: "indispensable = 不可或缺的。substantial = 大量的，plausible = 貌似合理的，redundant = 冗余的。根据句意，英语能力是这个职位的必要条件。"
    },
    {
      id: "2024_13",
      stem: "________ the heavy rain, the outdoor concert proceeded as scheduled.",
      options: { A: "Notwithstanding", B: "In spite", C: "Regardless", D: "Despite of" },
      answer: "A",
      explanation: "Notwithstanding = 尽管（正式用语，可直接接名词）。B缺少of，C缺少of，D多了of（Despite直接接名词）。Notwithstanding the heavy rain 是正确表达。"
    },
    {
      id: "2024_14",
      stem: "The professor's lecture was so ________ that even the most complex theories seemed easy to understand.",
      options: { A: "intricate", B: "profound", C: "lucid", D: "plausible" },
      answer: "C",
      explanation: "lucid = 清晰易懂的。intricate = 错综复杂的，profound = 深刻的，plausible = 貌似合理的。根据'even complex theories seemed easy'可知教授讲得清晰易懂。"
    },
    {
      id: "2024_15",
      stem: "If the situation continues to ________, we may have to take emergency measures.",
      options: { A: "deteriorate", B: "alleviate", C: "mitigate", D: "commence" },
      answer: "A",
      explanation: "deteriorate = 恶化。alleviate = 减轻，mitigate = 缓和，commence = 开始。根据'采取紧急措施'可知情况在恶化。"
    },
    {
      id: "2024_16",
      stem: "The company has implemented new policies ________ at reducing carbon emissions.",
      options: { A: "aimed", B: "aiming", C: "to aim", D: "being aimed" },
      answer: "A",
      explanation: "(policies) aimed at = 旨在...的政策。过去分词短语作后置定语，修饰policies。"
    },
    {
      id: "2024_17",
      stem: "She is ________ to be the most promising young scientist of her generation.",
      options: { A: "regarded", B: "considered", C: "acknowledged", D: "reckoned" },
      answer: "C",
      explanation: "be acknowledged to be = 被公认是。regard as, consider (as), reckon as 后面通常接as而不是to be。"
    },
    {
      id: "2024_18",
      stem: "The ________ influence of social media on teenagers' mental health cannot be ignored.",
      options: { A: "pervasive", B: "conducive", C: "inevitable", D: "eminent" },
      answer: "A",
      explanation: "pervasive = 普遍的、渗透性的。conducive = 有益的（后接to），inevitable = 不可避免的，eminent = 杰出的。社交媒体对青少年的影响是'普遍渗透的'。"
    },
    {
      id: "2024_19",
      stem: "Which of the following sentences is grammatically INCORRECT?",
      options: {
        A: "Neither of the two candidates was suitable for the position.",
        B: "The number of applicants have increased dramatically this year.",
        C: "Each of the students is required to submit a report by Friday.",
        D: "A series of lectures on climate change was held last month."
      },
      answer: "B",
      explanation: "The number of + 复数名词 + 单数动词。正确应为 has increased。Neither of/Each of/A series of 后面都用单数动词。"
    },
    {
      id: "2024_20",
      stem: "It is essential that every student ________ the safety regulations before entering the laboratory.",
      options: { A: "understands", B: "understand", C: "understood", D: "will understand" },
      answer: "B",
      explanation: "It is essential that... 后面的从句用虚拟语气（should + 动词原形），should可省略。所以用动词原形understand。"
    },
    {
      id: "2024_21",
      stem: "The research team ________ the experiment for three months before they finally got meaningful results.",
      options: { A: "had been conducting", B: "has conducted", C: "conducted", D: "was conducting" },
      answer: "A",
      explanation: "过去完成进行时（had been doing），表示在过去某个时间点之前一直持续进行的动作。before从句用的是一般过去时got。"
    },
    {
      id: "2024_22",
      stem: "________ for his outstanding contribution to environmental protection, the activist received a national award.",
      options: { A: "Honoring", B: "Honored", C: "Having honored", D: "To honor" },
      answer: "B",
      explanation: "过去分词短语作原因状语。be honored for = 因...受到表彰。主语the activist是'被表彰'，用过去分词表被动。"
    },
    {
      id: "2024_23",
      stem: "The newly discovered species, ________ pictures have gone viral on social media, is now under official protection.",
      options: { A: "which", B: "that", C: "whose", D: "its" },
      answer: "C",
      explanation: "whose引导非限制性定语从句，表示所属关系。whose pictures = the pictures of the newly discovered species。"
    },
    {
      id: "2024_24",
      stem: "You ________ the report by Friday; the deadline has been extended to next Monday.",
      options: { A: "needn't have finished", B: "mustn't have finished", C: "can't have finished", D: "shouldn't have finished" },
      answer: "A",
      explanation: "needn't have done = 本不必做（但实际上做了）。根据句意，截止日期延期了，所以你本不必在周五前完成报告。"
    },
    {
      id: "2024_25",
      stem: "The manager, together with his team members, ________ to attend the international conference next month.",
      options: { A: "are scheduled", B: "is scheduled", C: "have been scheduled", D: "were scheduled" },
      answer: "B",
      explanation: "together with不影响主语的单复数。主语是the manager（单数），所以用单数动词is scheduled。"
    }
  ],

  cloze: {
    wordBank: [
      { key: "A", word: "accessible" }, { key: "B", word: "consequence" },
      { key: "C", word: "diminishing" }, { key: "D", word: "distinction" },
      { key: "E", word: "emerging" }, { key: "F", word: "facilitated" },
      { key: "G", word: "inevitably" }, { key: "H", word: "interaction" },
      { key: "I", word: "maintaining" }, { key: "J", word: "overwhelming" },
      { key: "K", word: "preserve" }, { key: "L", word: "readily" },
      { key: "M", word: "reluctant" }, { key: "N", word: "shift" },
      { key: "O", word: "undermined" }
    ],
    passage: "The digital revolution has profoundly transformed the way we communicate. One significant (31)________ is the blurring of the (32)________ between public and private spheres. Social media platforms have (33)________ the sharing of personal information on an unprecedented scale, making intimate details of people's lives (34)________ to a global audience.\n\nHowever, this openness comes at a cost. Privacy, once taken for granted, has been gradually (35)________ by the constant demand for online visibility. Many users, particularly younger generations, have become (36)________ to question whether their data might be misused. The (37)________ volume of information shared daily makes it nearly impossible to (38)________ control over one's digital footprint.\n\nDespite these concerns, the trend shows no sign of (39)________. Instead, new forms of digital (40)________ are constantly evolving, reshaping our understanding of what it means to be 'social' in the 21st century.",
    answers: { 31: "B", 32: "D", 33: "F", 34: "A", 35: "O", 36: "M", 37: "J", 38: "I", 39: "C", 40: "H" },
    explanations: {
      31: "consequence = 后果、结果。数字革命的一个显著后果是...",
      32: "distinction = 区别。公私领域界限的模糊。",
      33: "facilitated = 促进、便利。社交媒体便利了个人信息分享。",
      34: "accessible = 可获取的。使私密细节对全球观众可获取。",
      35: "undermined = 逐渐削弱。隐私被持续削弱。",
      36: "reluctant = 不情愿的。用户变得不愿意质疑数据是否被滥用。",
      37: "overwhelming = 压倒性的。每天分享的海量信息。",
      38: "maintaining = 保持。维持对数字足迹的控制。",
      39: "diminishing = 减少。趋势没有减弱的迹象。",
      40: "interaction = 互动。新的数字互动形式。"
    }
  },

  listeningTalk: {
    title: "The Benefits of Bilingualism",
    items: [
      { id: 1, answer: "cognitive flexibility", hint: "双语对认知的主要好处" },
      { id: 2, answer: "executive function", hint: "大脑的高级控制功能" },
      { id: 3, answer: "delayed onset", hint: "双语对痴呆症的影响" },
      { id: 4, answer: "problem-solving skills", hint: "双语者的优势能力" },
      { id: 5, answer: "metalinguistic awareness", hint: "对语言本身的理解能力" },
      { id: 6, answer: "code-switching", hint: "双语者转换语言的现象" },
      { id: 7, answer: "cultural sensitivity", hint: "双语对文化理解的影响" },
      { id: 8, answer: "academic performance", hint: "双语对学生学业的影响" },
      { id: 9, answer: "critical period", hint: "语言学习的关键时期" },
      { id: 10, answer: "lifelong learning", hint: "持续学习的理念" }
    ]
  },

  writing: {
    title: "Online Learning vs. Traditional Classroom",
    prompt: "Read carefully the following excerpt on online education, and then write your response in NO LESS THAN 200 WORDS, in which you should:\n① summarize the main message of the excerpt, and then\n② comment on whether online learning can replace traditional classroom education.",
    excerpt: "The COVID-19 pandemic forced educational institutions worldwide to shift to online learning almost overnight. While this transition was challenging, it also revealed the potential of digital education. Students can now access lectures from top universities without leaving their homes. However, critics argue that online learning lacks the personal interaction and immediate feedback that traditional classrooms provide. The debate continues: Is online education a supplement to, or a replacement for, traditional classroom learning?",
    time: 45
  }
};

// 全局真题库
const ALL_EXAMS = [TEM4_2025, TEM4_2024];
