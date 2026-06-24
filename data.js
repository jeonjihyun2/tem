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

  // ===== Listening Comprehension 对话生词 =====
  // Conversation One — 健身中心
  "membership": { phonetic: "/ˈmembərʃɪp/", meaning: "n. 会员资格，会籍", example: "gym membership" },
  "budget": { phonetic: "/ˈbʌdʒɪt/", meaning: "n. 预算 adj. 便宜的", example: "budget membership" },
  "cancellation": { phonetic: "/ˌkænsəˈleɪʃn/", meaning: "n. 取消，注销", example: "cancellation fees" },
  "minimum": { phonetic: "/ˈmɪnɪməm/", meaning: "adj. 最小的，最低的 n. 最小值", example: "minimum contract period" },
  "contract": { phonetic: "/ˈkɑːntrækt/", meaning: "n. 合同，契约", example: "a minimum contract" },
  "round-the-clock": { phonetic: "/ˌraʊnd ðə ˈklɒk/", meaning: "adj. 全天候的，24小时的", example: "round-the-clock service" },
  "assessment": { phonetic: "/əˈsesmənt/", meaning: "n. 评估，评定", example: "fitness assessments" },
  "brochure": { phonetic: "/broʊˈʃʊr/", meaning: "n. 小册子，宣传手册", example: "Our brochure states..." },
  "tailored": { phonetic: "/ˈteɪlərd/", meaning: "adj. 量身定制的", example: "a fully tailored exercise plan" },
  "demonstrate": { phonetic: "/ˈdemənstreɪt/", meaning: "v. 演示，展示", example: "demonstrate every movement" },
  "nutrition": { phonetic: "/nuˈtrɪʃn/", meaning: "n. 营养，营养学", example: "nutrition guidance" },
  "coaching": { phonetic: "/ˈkoʊtʃɪŋ/", meaning: "n. 指导，辅导", example: "ongoing nutrition coaching" },
  "introductory": { phonetic: "/ˌɪntrəˈdʌktəri/", meaning: "adj. 入门的，介绍性的", example: "introductory sessions" },
  "facility": { phonetic: "/fəˈsɪləti/", meaning: "n. 设施，设备", example: "our facilities" },
  "workout": { phonetic: "/ˈwɜːrkaʊt/", meaning: "n. 锻炼，训练", example: "reasons behind each workout" },

  // Conversation Two — 未来汽车
  "automotive": { phonetic: "/ˌɔːtəˈmoʊtɪv/", meaning: "adj. 汽车的，机动车的", example: "automotive engineering" },
  "aerodynamics": { phonetic: "/ˌeroʊdaɪˈnæmɪks/", meaning: "n. 空气动力学", example: "engines, performance, aerodynamics" },
  "alternative": { phonetic: "/ɔːlˈtɜːrnətɪv/", meaning: "adj. 替代的 n. 替代品", example: "alternative fuels" },
  "fossil fuel": { phonetic: "/ˈfɑːsl ˈfjuːəl/", meaning: "n. 化石燃料", example: "fossil fuel resources" },
  "hybrid": { phonetic: "/ˈhaɪbrɪd/", meaning: "adj. 混合的 n. 混合体", example: "hybrid vehicles" },
  "hydrogen": { phonetic: "/ˈhaɪdrədʒən/", meaning: "n. 氢", example: "hydrogen fuel cells" },
  "fuel cell": { phonetic: "/ˈfjuːəl sel/", meaning: "n. 燃料电池", example: "hydrogen fuel cells" },
  "autonomous": { phonetic: "/ɔːˈtɑːnəməs/", meaning: "adj. 自主的，自动驾驶的", example: "autonomous cars" },
  "mindset": { phonetic: "/ˈmaɪndset/", meaning: "n. 心态，思维模式", example: "public mindset" },
  "barrier": { phonetic: "/ˈbæriər/", meaning: "n. 障碍，壁垒", example: "the main barrier" },
  "infrastructure": { phonetic: "/ˈɪnfrəstrʌktʃər/", meaning: "n. 基础设施", example: "infrastructure is another big obstacle" },
  "obstacle": { phonetic: "/ˈɑːbstəkl/", meaning: "n. 障碍，妨碍", example: "another big obstacle" },
  "congestion": { phonetic: "/kənˈdʒestʃən/", meaning: "n. 拥堵，拥挤", example: "traffic jams and congestion" },
  "manual": { phonetic: "/ˈmænjuəl/", meaning: "adj. 手动的，人工的", example: "manual driving" },
  "impractical": { phonetic: "/ɪmˈpræktɪkl/", meaning: "adj. 不切实际的", example: "seem impractical" },
  "astronomical": { phonetic: "/ˌæstrəˈnɑːmɪkl/", meaning: "adj. 天文的；极其巨大的", example: "astronomical production costs" },
  "insight": { phonetic: "/ˈɪnsaɪt/", meaning: "n. 洞察力，深刻见解", example: "thanks for sharing your insights" },
  "mainstream": { phonetic: "/ˈmeɪnstriːm/", meaning: "n. 主流 adj. 主流的", example: "become mainstream" },
  "rural": { phonetic: "/ˈrʊrəl/", meaning: "adj. 乡村的，农村的", example: "rural country roads" },
  "destination": { phonetic: "/ˌdestɪˈneɪʃn/", meaning: "n. 目的地", example: "input your destination" },

  // ===== 2025 Cloze 词库词汇 =====
  "applied": { phonetic: "/əˈplaɪd/", meaning: "adj. 应用的；实用的 v. 应用(apply的过去式)", example: "applied to the target domain" },
  "associatively": { phonetic: "/əˈsoʊʃiətɪvli/", meaning: "adv. 联想地；关联地", example: "associatively linked" },
  "coherence": { phonetic: "/koʊˈhɪrəns/", meaning: "n. 连贯性，一致性", example: "textual coherence" },
  "conceptualize": { phonetic: "/kənˈseptʃuəlaɪz/", meaning: "v. 概念化，形成概念", example: "conceptualize the world" },
  "concrete": { phonetic: "/ˈkɑːŋkriːt/", meaning: "adj. 具体的；混凝土的 n. 混凝土", example: "concrete evidence" },
  "feature": { phonetic: "/ˈfiːtʃər/", meaning: "n. 特征，特色 v. 以...为特色", example: "a key feature" },
  "jointly": { phonetic: "/ˈdʒɔɪntli/", meaning: "adv. 共同地，联合地", example: "jointly organized" },
  "narrate": { phonetic: "/nəˈreɪt/", meaning: "v. 叙述，讲述", example: "narrate a story" },
  "ornamental": { phonetic: "/ˌɔːrnəˈmentl/", meaning: "adj. 装饰性的", example: "ornamental plants" },
  "readily": { phonetic: "/ˈredɪli/", meaning: "adv. 容易地；乐意地", example: "readily available" },
  "separating": { phonetic: "/ˈsepəreɪtɪŋ/", meaning: "v. 分开，分离", example: "separating the two domains" },
  "style": { phonetic: "/staɪl/", meaning: "n. 风格；方式", example: "an element of style" },
  "supplementary": { phonetic: "/ˌsʌplɪˈmentri/", meaning: "adj. 补充的，附加的", example: "supplementary material" },
  "sustaining": { phonetic: "/səˈsteɪnɪŋ/", meaning: "v. 维持，支撑", example: "sustaining understanding" },
  "used": { phonetic: "/juːzd/", meaning: "adj. 用过的；习惯的 v. 使用(use的过去式)", example: "commonly used" },

  // ===== 2025 Language Usage 选项词汇 =====
  "janitor": { phonetic: "/ˈdʒænɪtər/", meaning: "n. 看门人，门卫", example: "a janitor guarding against intruders" },
  "intruder": { phonetic: "/ɪnˈtruːdər/", meaning: "n. 入侵者，闯入者", example: "guard against any possible intruder" },
  "guarding": { phonetic: "/ˈɡɑːrdɪŋ/", meaning: "v. 守卫，保卫", example: "guarding the entrance" },
  "advisable": { phonetic: "/ədˈvaɪzəbl/", meaning: "adj. 明智的，可取的", example: "it is advisable that..." },
  "salary": { phonetic: "/ˈsæləri/", meaning: "n. 薪水，工资", example: "save out of her salary" },
  "trunk": { phonetic: "/trʌŋk/", meaning: "n. 树干；行李箱", example: "an oak trunk" },
  "oak": { phonetic: "/oʊk/", meaning: "n. 橡树；橡木", example: "Italian oak trunk" },
  "charming": { phonetic: "/ˈtʃɑːrmɪŋ/", meaning: "adj. 迷人的，有魅力的", example: "a charming brown Italian oak trunk" },
  "flexible": { phonetic: "/ˈfleksəbl/", meaning: "adj. 灵活的，柔韧的", example: "a more flexible means" },
  "means": { phonetic: "/miːnz/", meaning: "n. 方法，手段", example: "a means of communication" },
  "samples": { phonetic: "/ˈsæmplz/", meaning: "n. 样品，样本", example: "send you the samples" },
  "terms": { phonetic: "/tɜːrmz/", meaning: "n. 条款，条件", example: "agree to the terms" },
  "hypothetical": { phonetic: "/ˌhaɪpəˈθetɪkl/", meaning: "adj. 假设的，假定的", example: "a hypothetical situation" },
  "obligation": { phonetic: "/ˌɑːblɪˈɡeɪʃn/", meaning: "n. 义务，责任", example: "have an obligation" },
  "willingness": { phonetic: "/ˈwɪlɪŋnəs/", meaning: "n. 意愿，乐意", example: "show willingness" },
  "envious": { phonetic: "/ˈenviəs/", meaning: "adj. 嫉妒的，羡慕的", example: "be envious of others" },
  "album": { phonetic: "/ˈælbəm/", meaning: "n. 相册；专辑", example: "upload an album" },
  "forever": { phonetic: "/fərˈevər/", meaning: "adv. 永远；长久地", example: "taking forever" },
  "upload": { phonetic: "/ˈʌploʊd/", meaning: "v. 上传", example: "upload an album" },
  "complaint": { phonetic: "/kəmˈpleɪnt/", meaning: "n. 抱怨，投诉", example: "expresses complaint" },
  "temporariness": { phonetic: "/ˈtempərerinəs/", meaning: "n. 暂时性", example: "expresses temporariness" },
  "parked": { phonetic: "/pɑːrkt/", meaning: "v. 停车(park的过去式)", example: "where you parked your car" },
  "frequently": { phonetic: "/ˈfriːkwəntli/", meaning: "adv. 频繁地，经常地", example: "frequently forget" },
  "firms": { phonetic: "/fɜːrmz/", meaning: "n. 公司，企业", example: "firms that use computers" },
  "staff": { phonetic: "/stæf/", meaning: "n. 员工，工作人员", example: "the number of staff" },
  "substantially": { phonetic: "/səbˈstænʃəli/", meaning: "adv. 大量地；实质上", example: "substantially reduced" },
  "guilty": { phonetic: "/ˈɡɪlti/", meaning: "adj. 有罪的；内疚的", example: "a guilty consciousness" },
  "consciousness": { phonetic: "/ˈkɑːnʃəsnəs/", meaning: "n. 意识；感觉", example: "guilty consciousness" },
  "concern": { phonetic: "/kənˈsɜːrn/", meaning: "n. 关心；担忧", example: "have a concern" },
  "cogitation": { phonetic: "/ˌkɑːdʒɪˈteɪʃn/", meaning: "n. 沉思，思考", example: "deep cogitation" },
  "contemplation": { phonetic: "/ˌkɑːntəmˈpleɪʃn/", meaning: "n. 沉思，冥想", example: "in contemplation" },
  "earnings": { phonetic: "/ˈɜːrnɪŋz/", meaning: "n. 收入，收益", example: "your earnings" },
  "proportion": { phonetic: "/prəˈpɔːrʃn/", meaning: "n. 比例；部分", example: "in proportion to" },
  "addition": { phonetic: "/əˈdɪʃn/", meaning: "n. 添加；加法", example: "in addition to" },
  "percentage": { phonetic: "/pərˈsentɪdʒ/", meaning: "n. 百分比，百分率", example: "a high percentage" },
  "tasty": { phonetic: "/ˈteɪsti/", meaning: "adj. 美味的，可口的", example: "very tasty" },
  "nutritious": { phonetic: "/nuˈtrɪʃəs/", meaning: "adj. 有营养的", example: "nutritious drink" },
  "vitamin": { phonetic: "/ˈvaɪtəmɪn/", meaning: "n. 维生素", example: "vitamin C" },
  "enriched": { phonetic: "/ɪnˈrɪtʃt/", meaning: "adj. 富含...的；丰富的", example: "enriched with vitamin C" },
  "strengthened": { phonetic: "/ˈstreŋθnd/", meaning: "adj. 加强的，增强的", example: "strengthened muscles" },
  "consolidated": { phonetic: "/kənˈsɑːlɪdeɪtɪd/", meaning: "adj. 巩固的，合并的", example: "consolidated power" },
  "landmark": { phonetic: "/ˈlændmɑːrk/", meaning: "n. 里程碑；地标", example: "a landmark in history" },
  "recognition": { phonetic: "/ˌrekəɡˈnɪʃn/", meaning: "n. 认可，承认", example: "international recognition" },
  "triumph": { phonetic: "/ˈtraɪʌmf/", meaning: "n. 胜利，成功", example: "a great triumph" },
  "sensible": { phonetic: "/ˈsensəbl/", meaning: "adj. 明智的，合理的", example: "a sensible decision" },
  "sensitive": { phonetic: "/ˈsensətɪv/", meaning: "adj. 敏感的；体贴的", example: "sensitive information" },
  "sensational": { phonetic: "/senˈseɪʃənl/", meaning: "adj. 轰动的，引起哗然的", example: "sensational news" },
  "senseless": { phonetic: "/ˈsensləs/", meaning: "adj. 无意义的；失去知觉的", example: "a senseless act" },
  "deliberately": { phonetic: "/dɪˈlɪbərətli/", meaning: "adv. 故意地；慎重地", example: "deliberately made so" },
  "methodically": { phonetic: "/məˈθɑːdɪkli/", meaning: "adv. 有条理地，有条不紊地", example: "work methodically" },
  "accidentally": { phonetic: "/ˌæksɪˈdentəli/", meaning: "adv. 偶然地，意外地", example: "accidentally discovered" },
  "carelessly": { phonetic: "/ˈkerləsli/", meaning: "adv. 粗心地，疏忽地", example: "carelessly made" },
  "symptom": { phonetic: "/ˈsɪmptəm/", meaning: "n. 症状", example: "if the symptoms persist" },
  "persist": { phonetic: "/pərˈsɪst/", meaning: "v. 坚持；持续存在", example: "symptoms persist for a day" },
  "perceive": { phonetic: "/pərˈsiːv/", meaning: "v. 感知，察觉", example: "perceive the difference" },
  "illustrate": { phonetic: "/ˈɪləstreɪt/", meaning: "v. 说明，阐明", example: "illustrate the point" },
  "perplex": { phonetic: "/pərˈpleks/", meaning: "v. 使困惑，使费解", example: "perplex the readers" },
  "resemblance": { phonetic: "/rɪˈzembləns/", meaning: "n. 相似，相像", example: "a strong resemblance" },
  "attraction": { phonetic: "/əˈtrækʃn/", meaning: "n. 吸引力；吸引人的事物", example: "tourist attraction" },
  "reflection": { phonetic: "/rɪˈflekʃn/", meaning: "n. 反射；反思", example: "on reflection" },
  "correspondence": { phonetic: "/ˌkɔːrəˈspɑːndəns/", meaning: "n. 通信；对应关系", example: "business correspondence" },
  "manufacturer": { phonetic: "/ˌmænjuˈfæktʃərər/", meaning: "n. 制造商，生产商", example: "smartphone manufacturer" },
  "blamed": { phonetic: "/bleɪmd/", meaning: "v. 责备，归咎于", example: "blamed faulty batteries" },
  "battery": { phonetic: "/ˈbætəri/", meaning: "n. 电池", example: "faulty batteries" },
  "humiliating": { phonetic: "/hjuːˈmɪlieɪtɪŋ/", meaning: "adj. 羞辱的，丢脸的", example: "a humiliating recall" },
  "recall": { phonetic: "/rɪˈkɔːl/", meaning: "n./v. 召回；回忆", example: "product recall" },
  "flagship": { phonetic: "/ˈflæɡʃɪp/", meaning: "n. 旗舰；主打产品", example: "flagship smartphone" },
  "faulty": { phonetic: "/ˈfɔːlti/", meaning: "adj. 有缺陷的，有故障的", example: "faulty batteries" },
  "coach": { phonetic: "/koʊtʃ/", meaning: "n. 教练 v. 指导", example: "head coach" },
  "entertaining": { phonetic: "/ˌentərˈteɪnɪŋ/", meaning: "adj. 有趣的 v. 考虑；娱乐", example: "entertaining possibilities" },
  "recollecting": { phonetic: "/ˌrekəˈlektɪŋ/", meaning: "v. 回忆，记起", example: "recollecting memories" },
  "reconciling": { phonetic: "/ˈrekənsaɪlɪŋ/", meaning: "v. 调和，使和解", example: "reconciling differences" },
  "overseas": { phonetic: "/ˌoʊvərˈsiːz/", meaning: "adv./adj. 在海外，国外的", example: "working overseas" },

  // ===== 2025 Cloze Passage 词汇 =====
  "traditionally": { phonetic: "/trəˈdɪʃənəli/", meaning: "adv. 传统上，历来", example: "traditionally associated with" },
  "metaphor": { phonetic: "/ˈmetəfər/", meaning: "n. 隐喻，暗喻", example: "a metaphor is a figure of speech" },
  "literature": { phonetic: "/ˈlɪtrətʃər/", meaning: "n. 文学；文献", example: "literature classes" },
  "isolation": { phonetic: "/ˌaɪsəˈleɪʃn/", meaning: "n. 隔离，孤立", example: "in isolation" },
  "poetic": { phonetic: "/poʊˈetɪk/", meaning: "adj. 诗的，诗歌的", example: "poetic language" },
  "primarily": { phonetic: "/praɪˈmerəli/", meaning: "adv. 主要地，首要地", example: "primarily as an element" },
  "consequently": { phonetic: "/ˈkɑːnsɪkwentli/", meaning: "adv. 因此，所以", example: "consequently, many people..." },
  "associate": { phonetic: "/əˈsoʊʃieɪt/", meaning: "v. 联想；联系；交往", example: "associate metaphors with literature" },
  "literary": { phonetic: "/ˈlɪtəreri/", meaning: "adj. 文学的", example: "literary arts" },
  "figure of speech": { phonetic: "/ˈfɪɡjər əv spiːtʃ/", meaning: "n. 修辞手法，修辞格", example: "Metaphor is a figure of speech." },
  "imagination": { phonetic: "/ɪˌmædʒɪˈneɪʃn/", meaning: "n. 想象，想象力", example: "acts of imagination" },
  "correspondences": { phonetic: "/ˌkɔːrəˈspɑːndənsɪz/", meaning: "n. 对应关系；通信", example: "set up correspondences" },
  "abstract": { phonetic: "/ˈæbstrækt/", meaning: "adj. 抽象的 n. 摘要", example: "an abstract object" },
  "tangible": { phonetic: "/ˈtændʒəbl/", meaning: "adj. 有形的，可触摸的", example: "a tangible object" },
  "mapping": { phonetic: "/ˈmæpɪŋ/", meaning: "n. 映射，绘制地图", example: "conceptual mapping" },
  "tending": { phonetic: "/ˈtendɪŋ/", meaning: "v. 照料，照看；倾向于", example: "tending to friendships" },
  "cultivating": { phonetic: "/ˈkʌltɪveɪtɪŋ/", meaning: "v. 培养，耕作", example: "cultivating a garden" },
  "visible": { phonetic: "/ˈvɪzəbl/", meaning: "adj. 可见的，明显的", example: "give visible forms" },
  "domain": { phonetic: "/doʊˈmeɪn/", meaning: "n. 领域，范围", example: "conceptual domains" },
  "comparison": { phonetic: "/kəmˈpærɪsn/", meaning: "n. 比较，对比", example: "invent a comparison" },
  "conventional": { phonetic: "/kənˈvenʃənl/", meaning: "adj. 传统的，常规的", example: "conventional metaphor" },
  "unconventional": { phonetic: "/ˌʌnkənˈvenʃənl/", meaning: "adj. 非传统的，不寻常的", example: "unconventional metaphor" },
  "phenomena": { phonetic: "/fəˈnɑːmɪnə/", meaning: "n. 现象（复数）", example: "disjointed phenomena" },
  "disjointed": { phonetic: "/dɪsˈdʒɔɪntɪd/", meaning: "adj. 不连贯的，杂乱无章的", example: "disjointed phenomena" },
  "involved": { phonetic: "/ɪnˈvɑːlvd/", meaning: "adj. 涉及的，有关的", example: "involved in the way" },
  "habit": { phonetic: "/ˈhæbɪt/", meaning: "n. 习惯，习性", example: "the habit of metaphorical thinking" },

  // ===== 2025 Reading Passage 词汇 =====
  "grandmother": { phonetic: "/ˈɡrænmʌðər/", meaning: "n. 祖母，奶奶", example: "my grandmother moved into" },
  "resident": { phonetic: "/ˈrezɪdənt/", meaning: "n. 居民，住户", example: "about fifteen other residents" },
  "depressing": { phonetic: "/dɪˈpresɪŋ/", meaning: "adj. 令人沮丧的，压抑的", example: "It was depressing." },
  "nursery": { phonetic: "/ˈnɜːrsəri/", meaning: "n. 托儿所；苗圃", example: "a nursery school" },
  "revolutionary": { phonetic: "/ˌrevəˈluːʃəneri/", meaning: "adj. 革命性的，创新的", example: "a revolutionary concept" },
  "residential": { phonetic: "/ˌrezɪˈdenʃl/", meaning: "adj. 住宅的，居住的", example: "residential home" },
  "cuddle": { phonetic: "/ˈkʌdl/", meaning: "n./v. 拥抱，搂抱", example: "a kind lap to sit on and a cuddle" },
  "enormous": { phonetic: "/ɪˈnɔːrməs/", meaning: "adj. 巨大的，庞大的", example: "enormous advantages" },
  "individual": { phonetic: "/ˌɪndɪˈvɪdʒuəl/", meaning: "adj. 个人的，个体的", example: "individual attention" },
  "psychological": { phonetic: "/ˌsaɪkəˈlɑːdʒɪkl/", meaning: "adj. 心理的，心理学的", example: "psychological health" },
  "breakdown": { phonetic: "/ˈbreɪkdaʊn/", meaning: "n. 崩溃；分解", example: "the breakdown of the extended family" },
  "extended family": { phonetic: "/ɪkˈstendɪd ˈfæməli/", meaning: "n. 大家庭，扩展家庭", example: "the extended family" },
  "desperately": { phonetic: "/ˈdespərətli/", meaning: "adv. 拼命地；极度地", example: "desperately need more support" },
  "initiative": { phonetic: "/ɪˈnɪʃətɪv/", meaning: "n. 倡议；主动性", example: "successful initiatives" },
  "conflict": { phonetic: "/ˈkɑːnflɪkt/", meaning: "n. 冲突，矛盾", example: "less conflict in a community" },
  "tolerance": { phonetic: "/ˈtɑːlərəns/", meaning: "n. 容忍，宽容", example: "as much understanding and tolerance as possible" },
  "isolated": { phonetic: "/ˈaɪsəleɪtɪd/", meaning: "adj. 孤立的，隔离的", example: "feel isolated" },
  "loneliness": { phonetic: "/ˈloʊnlinəs/", meaning: "n. 孤独，寂寞", example: "put an end to loneliness" },
  "community": { phonetic: "/kəˈmjuːnəti/", meaning: "n. 社区；群体", example: "what community really means" },

  // ===== 2025 Reading Passage 2 词汇 =====
  "liquor": { phonetic: "/ˈlɪkər/", meaning: "n. 烈酒", example: "bad reaction to liquor" },
  "belligerent": { phonetic: "/bəˈlɪdʒərənt/", meaning: "adj. 好斗的，挑衅的", example: "turn belligerent" },
  "spiciness": { phonetic: "/ˈspaɪsinəs/", meaning: "n. 辛辣；尖刻", example: "all the spiciness would come to the surface" },
  "decorous": { phonetic: "/ˈdekərəs/", meaning: "adj. 得体的，有礼貌的", example: "the most decorous voice" },
  "errand": { phonetic: "/ˈerənd/", meaning: "n. 差事，跑腿", example: "run an errand in the store" },
  "outspoken": { phonetic: "/aʊtˈspoʊkən/", meaning: "adj. 直言不讳的，坦率的", example: "too outspoken and overbearing" },
  "overbearing": { phonetic: "/ˌoʊvərˈberɪŋ/", meaning: "adj. 专横的，傲慢的", example: "too outspoken and overbearing" },
  "harsh": { phonetic: "/hɑːrʃ/", meaning: "adj. 严厉的，刺耳的", example: "a harsh solemnity" },
  "solemnity": { phonetic: "/səˈlemnəti/", meaning: "n. 庄严，严肃", example: "a harsh solemnity" },
  "despised": { phonetic: "/dɪˈspaɪzd/", meaning: "v. 鄙视，轻视（despise的过去式）", example: "she despised her varied personal influences" },
  "varied": { phonetic: "/ˈverid/", meaning: "adj. 多样的，各种各样的", example: "varied personal influences" },
  "venture": { phonetic: "/ˈventʃər/", meaning: "n. 冒险；企业", example: "a series of failed ventures" },
  "produce": { phonetic: "/ˈprɑːduːs/", meaning: "n. 农产品 v. 生产", example: "cleaning produce for a greengrocer" },
  "greengrocer": { phonetic: "/ˈɡriːnɡroʊsər/", meaning: "n. 蔬菜水果商", example: "a greengrocer" },
  "hauling": { phonetic: "/ˈhɔːlɪŋ/", meaning: "v. 拖，拉，搬运", example: "hauling and cleaning produce" },
  "infant": { phonetic: "/ˈɪnfənt/", meaning: "n. 婴儿，幼儿", example: "infant's daughter" },

  // ===== 2025 Reading Passage 3 词汇 =====
  "jungle": { phonetic: "/ˈdʒʌŋɡl/", meaning: "n. 丛林，密林", example: "deep in the jungles of Colombia" },
  "perfume": { phonetic: "/pərˈfjuːm/", meaning: "n. 香水；香味", example: "unique perfume" },
  "vine": { phonetic: "/vaɪn/", meaning: "n. 藤蔓，葡萄藤", example: "in a vine that only blooms" },
  "blooms": { phonetic: "/bluːmz/", meaning: "v. 开花", example: "only blooms for a few days" },
  "orchid": { phonetic: "/ˈɔːrkɪd/", meaning: "n. 兰花", example: "types of orchids" },
  "species": { phonetic: "/ˈspiːʃiːz/", meaning: "n. 物种，种类", example: "rare and delicate species" },
  "delicate": { phonetic: "/ˈdelɪkət/", meaning: "adj. 精致的，脆弱的", example: "delicate species" },
  "prized": { phonetic: "/praɪzd/", meaning: "adj. 被珍视的，珍贵的", example: "have been prized by discoverers" },
  "explorers": { phonetic: "/ɪkˈsplɔːrərz/", meaning: "n. 探险者，探索者", example: "discoverers, explorers, and adventurers" },
  "fragile": { phonetic: "/ˈfrædʒl/", meaning: "adj. 脆弱的，易碎的", example: "fragile plants" },
  "pollinate": { phonetic: "/ˈpɑːləneɪt/", meaning: "v. 授粉", example: "plants that can self-pollinate" },
  "pollen": { phonetic: "/ˈpɑːlən/", meaning: "n. 花粉", example: "spread their pollen" },
  "stigma": { phonetic: "/ˈstɪɡmə/", meaning: "n. 柱头；耻辱", example: "produced by the flower's stigma" },
  "reproduce": { phonetic: "/ˌriːprəˈduːs/", meaning: "v. 繁殖，生殖", example: "genetic material for the plant to reproduce" },
  "evolved": { phonetic: "/ɪˈvɑːlvd/", meaning: "v. 进化，发展（evolve的过去式）", example: "orchids evolved a vast array" },
  "lure": { phonetic: "/lʊr/", meaning: "v. 引诱，诱惑", example: "smell like something to lure insects" },
  "beetles": { phonetic: "/ˈbiːtlz/", meaning: "n. 甲虫", example: "bees, beetles or flies" },
  "cedar": { phonetic: "/ˈsiːdər/", meaning: "n. 雪松，杉木", example: "smell like pure cedar" },
  "vanilla": { phonetic: "/vəˈnɪlə/", meaning: "n. 香草", example: "some like vanilla" },
  "habitat": { phonetic: "/ˈhæbɪtæt/", meaning: "n. 栖息地", example: "as a part of their habitat" },
  "pollinator": { phonetic: "/ˈpɑːlɪneɪtər/", meaning: "n. 传粉者", example: "very specific pollinator" },
  "specialisation": { phonetic: "/ˌspeʃəlaɪˈzeɪʃn/", meaning: "n. 专业化，特化", example: "evolutionary specialisation" },
  "evolution": { phonetic: "/ˌiːvəˈluːʃn/", meaning: "n. 进化，演变", example: "examples of evolution" },
  "impressive": { phonetic: "/ɪmˈpresɪv/", meaning: "adj. 令人印象深刻的", example: "still very impressive" },

  // ===== 2024 Cloze 词库词汇 =====
  "accessible": { phonetic: "/əkˈsesəbl/", meaning: "adj. 可获取的，可接近的", example: "accessible to a global audience" },
  "consequence": { phonetic: "/ˈkɑːnsɪkwens/", meaning: "n. 后果，结果", example: "one significant consequence" },
  "diminishing": { phonetic: "/dɪˈmɪnɪʃɪŋ/", meaning: "adj. 减少的，缩小的", example: "shows no sign of diminishing" },
  "distinction": { phonetic: "/dɪˈstɪŋkʃn/", meaning: "n. 区别，差别", example: "the blurring of the distinction" },
  "emerging": { phonetic: "/ɪˈmɜːrdʒɪŋ/", meaning: "adj. 新兴的，出现的", example: "emerging technologies" },
  "facilitated": { phonetic: "/fəˈsɪlɪteɪtɪd/", meaning: "v. 促进，使便利", example: "facilitated the sharing" },
  "inevitably": { phonetic: "/ɪnˈevɪtəbli/", meaning: "adv. 不可避免地", example: "inevitably leads to" },
  "interaction": { phonetic: "/ˌɪntərˈækʃn/", meaning: "n. 互动，交流", example: "digital interaction" },
  "maintaining": { phonetic: "/meɪnˈteɪnɪŋ/", meaning: "v. 维持，保持", example: "maintaining control" },
  "overwhelming": { phonetic: "/ˌoʊvərˈwelmɪŋ/", meaning: "adj. 压倒性的，巨大的", example: "overwhelming volume" },
  "preserve": { phonetic: "/prɪˈzɜːrv/", meaning: "v. 保护，保存", example: "preserve privacy" },
  "reluctant": { phonetic: "/rɪˈlʌktənt/", meaning: "adj. 不情愿的，勉强的", example: "reluctant to question" },
  "shift": { phonetic: "/ʃɪft/", meaning: "n./v. 转变，转移", example: "a significant shift" },
  "undermined": { phonetic: "/ˌʌndərˈmaɪnd/", meaning: "v. 逐渐削弱，暗中破坏", example: "privacy has been undermined" },

  // ===== 2024 Language Usage 词汇 =====
  "detective": { phonetic: "/dɪˈtektɪv/", meaning: "n. 侦探", example: "the detective spent hours" },
  "scrutinizing": { phonetic: "/ˈskruːtənaɪzɪŋ/", meaning: "v. 仔细检查，审查", example: "scrutinizing the evidence" },
  "overlooked": { phonetic: "/ˌoʊvərˈlʊkt/", meaning: "adj. 被忽视的", example: "overlooked details" },
  "scanning": { phonetic: "/ˈskænɪŋ/", meaning: "v. 浏览，扫描", example: "scanning the document" },
  "glancing": { phonetic: "/ˈɡlænsɪŋ/", meaning: "v. 瞥一眼，扫视", example: "glancing at the page" },
  "observing": { phonetic: "/əbˈzɜːrvɪŋ/", meaning: "v. 观察，观测", example: "observing the behavior" },
  "indispensable": { phonetic: "/ˌɪndɪˈspensəbl/", meaning: "adj. 不可或缺的", example: "an indispensable tool" },
  "substantial": { phonetic: "/səbˈstænʃl/", meaning: "adj. 大量的，实质的", example: "substantial evidence" },
  "plausible": { phonetic: "/ˈplɔːzəbl/", meaning: "adj. 貌似合理的", example: "a plausible explanation" },
  "redundant": { phonetic: "/rɪˈdʌndənt/", meaning: "adj. 多余的，冗余的", example: "redundant information" },
  "proficiency": { phonetic: "/prəˈfɪʃnsi/", meaning: "n. 熟练，精通", example: "demonstrate proficiency" },
  "notwithstanding": { phonetic: "/ˌnɑːtwɪθˈstændɪŋ/", meaning: "prep./adv. 尽管", example: "Notwithstanding the heavy rain" },
  "proceeded": { phonetic: "/prəˈsiːdɪd/", meaning: "v. 继续进行", example: "proceeded as scheduled" },
  "lucid": { phonetic: "/ˈluːsɪd/", meaning: "adj. 清晰易懂的", example: "a lucid explanation" },
  "profound": { phonetic: "/prəˈfaʊnd/", meaning: "adj. 深刻的，深远的", example: "a profound impact" },
  "deteriorate": { phonetic: "/dɪˈtɪriəreɪt/", meaning: "v. 恶化，变坏", example: "the situation continues to deteriorate" },
  "alleviate": { phonetic: "/əˈliːvieɪt/", meaning: "v. 减轻，缓解", example: "alleviate the pain" },
  "mitigate": { phonetic: "/ˈmɪtɪɡeɪt/", meaning: "v. 减轻，缓和", example: "mitigate the risks" },
  "commence": { phonetic: "/kəˈmens/", meaning: "v. 开始，着手", example: "commence the project" },
  "emissions": { phonetic: "/ɪˈmɪʃnz/", meaning: "n. 排放物，排放", example: "carbon emissions" },
  "implemented": { phonetic: "/ˈɪmplɪmentɪd/", meaning: "v. 实施，执行", example: "implemented new policies" },
  "regarded": { phonetic: "/rɪˈɡɑːrdɪd/", meaning: "v. 认为，看待", example: "is regarded as" },
  "acknowledged": { phonetic: "/əkˈnɑːlɪdʒd/", meaning: "adj. 公认的", example: "acknowledged to be" },
  "reckoned": { phonetic: "/ˈrekənd/", meaning: "v. 认为，估计", example: "is reckoned as" },
  "promising": { phonetic: "/ˈprɑːmɪsɪŋ/", meaning: "adj. 有前途的，有希望的", example: "most promising young scientist" },
  "pervasive": { phonetic: "/pərˈveɪsɪv/", meaning: "adj. 普遍的，渗透的", example: "pervasive influence" },
  "conducive": { phonetic: "/kənˈduːsɪv/", meaning: "adj. 有益的，有助于...的", example: "conducive to learning" },
  "inevitable": { phonetic: "/ɪnˈevɪtəbl/", meaning: "adj. 不可避免的", example: "an inevitable outcome" },
  "eminent": { phonetic: "/ˈemɪnənt/", meaning: "adj. 杰出的，卓越的", example: "an eminent scholar" },
  "imminent": { phonetic: "/ˈɪmɪnənt/", meaning: "adj. 即将发生的", example: "imminent danger" },
  "candidates": { phonetic: "/ˈkændɪdeɪts/", meaning: "n. 候选人；应试者", example: "two candidates" },
  "applicants": { phonetic: "/ˈæplɪkənts/", meaning: "n. 申请人", example: "the number of applicants" },
  "regulations": { phonetic: "/ˌreɡjuˈleɪʃnz/", meaning: "n. 规定，规章", example: "safety regulations" },
  "laboratory": { phonetic: "/ˈlæbrətɔːri/", meaning: "n. 实验室", example: "entering the laboratory" },
  "conducting": { phonetic: "/kənˈdʌktɪŋ/", meaning: "v. 进行，实施", example: "conducting the experiment" },
  "contribution": { phonetic: "/ˌkɑːntrɪˈbjuːʃn/", meaning: "n. 贡献", example: "outstanding contribution" },
  "activist": { phonetic: "/ˈæktɪvɪst/", meaning: "n. 活动家，积极分子", example: "the activist received a national award" },
  "viral": { phonetic: "/ˈvaɪrəl/", meaning: "adj. 病毒式的；病毒性的", example: "gone viral on social media" },
  "deadline": { phonetic: "/ˈdedlaɪn/", meaning: "n. 截止日期", example: "the deadline has been extended" },
  "extended": { phonetic: "/ɪkˈstendɪd/", meaning: "adj. 延长的，扩展的", example: "deadline has been extended" },
  "conference": { phonetic: "/ˈkɑːnfərəns/", meaning: "n. 会议，大会", example: "attend the international conference" },
  "scheduled": { phonetic: "/ˈskedʒuːld/", meaning: "adj. 预定的，安排的", example: "is scheduled to attend" },

  // ===== 更多常用词汇 =====
  "blurring": { phonetic: "/ˈblɜːrɪŋ/", meaning: "n. 模糊，变得模糊", example: "the blurring of the distinction" },
  "spheres": { phonetic: "/sfɪrz/", meaning: "n. 领域，范围；球体", example: "public and private spheres" },
  "platforms": { phonetic: "/ˈplætfɔːrmz/", meaning: "n. 平台", example: "social media platforms" },
  "unprecedented": { phonetic: "/ʌnˈpresɪdentɪd/", meaning: "adj. 前所未有的", example: "on an unprecedented scale" },
  "intimate": { phonetic: "/ˈɪntɪmət/", meaning: "adj. 亲密的；私密的", example: "intimate details" },
  "audience": { phonetic: "/ˈɔːdiəns/", meaning: "n. 观众，听众", example: "a global audience" },
  "visibility": { phonetic: "/ˌvɪzəˈbɪləti/", meaning: "n. 可见度，能见度", example: "online visibility" },
  "generations": { phonetic: "/ˌdʒenəˈreɪʃnz/", meaning: "n. 代，世代", example: "younger generations" },
  "footprint": { phonetic: "/ˈfʊtprɪnt/", meaning: "n. 足迹，脚印", example: "digital footprint" },
  "reshaping": { phonetic: "/riːˈʃeɪpɪŋ/", meaning: "v. 重塑，改变", example: "reshaping our understanding" },
  "decade": { phonetic: "/ˈdekeɪd/", meaning: "n. 十年", example: "for over a decade" },
  "global": { phonetic: "/ˈɡloʊbl/", meaning: "adj. 全球的", example: "global economy" },
  "economy": { phonetic: "/ɪˈkɑːnəmi/", meaning: "n. 经济", example: "global economy" },
  "transportation": { phonetic: "/ˌtrænspɔːrˈteɪʃn/", meaning: "n. 交通，运输", example: "transportation systems" },
  "intersecting": { phonetic: "/ˌɪntərˈsektɪŋ/", meaning: "adj. 交叉的，交汇的", example: "intersecting community" },
  "diversity": { phonetic: "/daɪˈvɜːrsəti/", meaning: "n. 多样性", example: "more diversity" },
  "homogeneous": { phonetic: "/ˌhoʊməˈdʒiːniəs/", meaning: "adj. 同质的，同类的", example: "a homogeneous community" },
  "symbolic": { phonetic: "/sɪmˈbɑːlɪk/", meaning: "adj. 符号的，象征的", example: "symbolic exchange" },
  "negotiate": { phonetic: "/nɪˈɡoʊʃieɪt/", meaning: "v. 协商，谈判", example: "negotiate shared meanings" },
  "embedded": { phonetic: "/ɪmˈbedɪd/", meaning: "adj. 嵌入的，内嵌的", example: "embedded societal system" },
  "verbal": { phonetic: "/ˈvɜːrbl/", meaning: "adj. 口头的，言语的", example: "verbal symbols" },
  "nonverbal": { phonetic: "/nɑːnˈvɜːrbl/", meaning: "adj. 非语言的", example: "nonverbal symbols" },
  "interdependent": { phonetic: "/ˌɪntərdɪˈpendənt/", meaning: "adj. 相互依赖的", example: "interdependent nature" },
  "mutually": { phonetic: "/ˈmjuːtʃuəli/", meaning: "adv. 相互地，共同地", example: "mutually interdependent" },
  "rituals": { phonetic: "/ˈrɪtʃuəlz/", meaning: "n. 仪式，礼节", example: "greeting rituals" },
  "ethnic": { phonetic: "/ˈeθnɪk/", meaning: "adj. 民族的，种族的", example: "an ethnic group" },
  "gender": { phonetic: "/ˈdʒendər/", meaning: "n. 性别", example: "a gender group" },
  "context": { phonetic: "/ˈkɑːntekst/", meaning: "n. 背景，语境", example: "multi-layered context" },
  "outcome": { phonetic: "/ˈaʊtkʌm/", meaning: "n. 结果，成果", example: "the outcome of the encounter" },
  "multilayered": { phonetic: "/ˌmʌltiˈleɪərd/", meaning: "adj. 多层次的", example: "multi-layered contexts" },

  // ===== 写作相关词汇 =====
  "fragmented": { phonetic: "/ˈfræɡməntɪd/", meaning: "adj. 碎片化的，零散的", example: "fragmented attention span" },
  "snippet": { phonetic: "/ˈsnɪpɪt/", meaning: "n. 片段，小片", example: "each tiny snippet" },
  "encode": { phonetic: "/ɪnˈkoʊd/", meaning: "v. 编码", example: "encode and absorb" },
  "absorb": { phonetic: "/əbˈzɔːrb/", meaning: "v. 吸收", example: "absorb bits and pieces" },
  "linear": { phonetic: "/ˈlɪniər/", meaning: "adj. 线性的，直线的", example: "long linear thinking" },
  "sustained": { phonetic: "/səˈsteɪnd/", meaning: "adj. 持续的", example: "sustained thinking" },
  "creative": { phonetic: "/kriˈeɪtɪv/", meaning: "adj. 创造性的", example: "be creative" },
  "rely": { phonetic: "/rɪˈlaɪ/", meaning: "v. 依赖，依靠", example: "rely on various tools" },
  "access": { phonetic: "/ˈækses/", meaning: "n./v. 获取，访问", example: "access to our culture" },
  "media": { phonetic: "/ˈmiːdiə/", meaning: "n. 媒体", example: "social media" },
  "technology": { phonetic: "/tekˈnɑːlədʒi/", meaning: "n. 技术", example: "as far as technology is concerned" },
  "educators": { phonetic: "/ˈedʒukeɪtərz/", meaning: "n. 教育工作者", example: "parents, teachers, and educators" },
  "flipping": { phonetic: "/ˈflɪpɪŋ/", meaning: "v. 快速翻动，浏览", example: "flipping through his phone" },
  "span": { phonetic: "/spæn/", meaning: "n. 跨度；持续时间", example: "attention span" },
  "culture": { phonetic: "/ˈkʌltʃər/", meaning: "n. 文化", example: "access to our culture" },

  // ===== 综合补充词汇（2024-2025真题全覆盖） =====
  // ---- 语言知识 Q11-30 选项核心词 ----
  "guard": { phonetic: "/ɡɑːrd/", meaning: "v. 守卫，保卫 n. 警卫", example: "guard against intruders" },
  "intruder": { phonetic: "/ɪnˈtruːdər/", meaning: "n. 闯入者，入侵者", example: "a janitor guarding against any possible intruder" },
  "manage": { phonetic: "/ˈmænɪdʒ/", meaning: "v. 管理；设法做到", example: "Lisa managed to save what little money she could" },
  "impression": { phonetic: "/ɪmˈpreʃn/", meaning: "n. 印象，感想", example: "leave a deep impression" },
  "communication": { phonetic: "/kəˌmjuːnɪˈkeɪʃn/", meaning: "n. 沟通，交流；通信", example: "a flexible means of communication" },
  "advantage": { phonetic: "/ədˈvæntɪdʒ/", meaning: "n. 优势，有利条件", example: "is always an advantage" },
  "indicate": { phonetic: "/ˈɪndɪkeɪt/", meaning: "v. 表明，指示", example: "The underlined word indicates..." },
  "polite": { phonetic: "/pəˈlaɪt/", meaning: "adj. 礼貌的，有教养的", example: "a polite request" },
  "request": { phonetic: "/rɪˈkwest/", meaning: "n./v. 请求，要求", example: "a polite request" },
  "uncertainty": { phonetic: "/ʌnˈsɜːrtnti/", meaning: "n. 不确定，不确定性", example: "expresses an uncertainty" },
  "suggestion": { phonetic: "/səˈdʒestʃən/", meaning: "n. 建议，提议", example: "a useful suggestion" },
  "miss": { phonetic: "/mɪs/", meaning: "v. 错过；想念", example: "missed the train" },
  "express": { phonetic: "/ɪkˈspres/", meaning: "v. 表达，表示", example: "expresses a hypothetical situation" },
  "obligation": { phonetic: "/ˌɑːblɪˈɡeɪʃn/", meaning: "n. 义务，责任", example: "expresses an obligation" },
  "willingness": { phonetic: "/ˈwɪlɪŋnəs/", meaning: "n. 意愿，乐意", example: "shows willingness to help" },
  "jealous": { phonetic: "/ˈdʒeləs/", meaning: "adj. 嫉妒的，妒忌的", example: "envious of others" },
  "forever": { phonetic: "/fərˈevər/", meaning: "adv. 永远；长久地", example: "It is taking forever." },
  "regret": { phonetic: "/rɪˈɡret/", meaning: "n./v. 后悔，遗憾", example: "expresses regret" },
  "complaint": { phonetic: "/kəmˈpleɪnt/", meaning: "n. 抱怨，投诉", example: "expresses complaint" },
  "temporariness": { phonetic: "/ˈtempərerinəs/", meaning: "n. 暂时性", example: "expresses temporariness" },
  "possibility": { phonetic: "/ˌpɑːsəˈbɪləti/", meaning: "n. 可能性", example: "possibility at present" },
  "forget": { phonetic: "/fərˈɡet/", meaning: "v. 忘记，遗忘", example: "frequently forget where you parked" },
  "park": { phonetic: "/pɑːrk/", meaning: "v. 停车 n. 公园", example: "where you parked your car" },
  "reduce": { phonetic: "/rɪˈduːs/", meaning: "v. 减少，降低", example: "can be substantially reduced" },
  "concern": { phonetic: "/kənˈsɜːrn/", meaning: "n. 关心；担忧 v. 涉及", example: "have a guilty concern" },
  "cogitation": { phonetic: "/ˌkɑːdʒɪˈteɪʃn/", meaning: "n. 沉思，思考", example: "deep cogitation" },
  "contemplation": { phonetic: "/ˌkɑːntəmˈpleɪʃn/", meaning: "n. 沉思，冥想", example: "in deep contemplation" },
  "consciousness": { phonetic: "/ˈkɑːnʃəsnəs/", meaning: "n. 意识；知觉；感觉", example: "a guilty consciousness" },
  "earnings": { phonetic: "/ˈɜːrnɪŋz/", meaning: "n. 收入，收益", example: "Your earnings will be in proportion to..." },
  "proportion": { phonetic: "/prəˈpɔːrʃn/", meaning: "n. 比例；部分", example: "in proportion to the amount of work" },
  "addition": { phonetic: "/əˈdɪʃn/", meaning: "n. 添加；加法", example: "in addition to" },
  "percentage": { phonetic: "/pərˈsentɪdʒ/", meaning: "n. 百分比，百分率", example: "a high percentage" },
  "tasty": { phonetic: "/ˈteɪsti/", meaning: "adj. 美味的，可口的", example: "very tasty drink" },
  "enrich": { phonetic: "/ɪnˈrɪtʃ/", meaning: "v. 使丰富；使富足", example: "enriched with vitamin C" },
  "strengthen": { phonetic: "/ˈstreŋθn/", meaning: "v. 加强，增强", example: "strengthened muscles" },
  "consolidate": { phonetic: "/kənˈsɑːlɪdeɪt/", meaning: "v. 巩固，合并", example: "consolidated power" },
  "increase": { phonetic: "/ɪnˈkriːs/", meaning: "v./n. 增加，增长", example: "increased production" },
  "discovery": { phonetic: "/dɪˈskʌvəri/", meaning: "n. 发现", example: "the discovery of the New World" },
  "standard": { phonetic: "/ˈstændərd/", meaning: "n. 标准 adj. 标准的", example: "a landmark in world history" },
  "recognition": { phonetic: "/ˌrekəɡˈnɪʃn/", meaning: "n. 认可，承认；识别", example: "international recognition" },
  "triumph": { phonetic: "/ˈtraɪʌmf/", meaning: "n. 胜利，成功 v. 获胜", example: "a great triumph" },
  "sensitive": { phonetic: "/ˈsensətɪv/", meaning: "adj. 敏感的；体贴的", example: "sensitive information" },
  "senseless": { phonetic: "/ˈsensləs/", meaning: "adj. 无意义的；失去知觉的", example: "a senseless act" },
  "accidentally": { phonetic: "/ˌæksɪˈdentəli/", meaning: "adv. 偶然地，意外地", example: "accidentally discovered" },
  "carelessly": { phonetic: "/ˈkerləsli/", meaning: "adv. 粗心地，疏忽地", example: "carelessly made" },
  "illustrate": { phonetic: "/ˈɪləstreɪt/", meaning: "v. 说明，阐明；举例说明", example: "illustrate the point" },
  "perplex": { phonetic: "/pərˈpleks/", meaning: "v. 使困惑，使费解", example: "perplex the readers" },
  "attraction": { phonetic: "/əˈtrækʃn/", meaning: "n. 吸引力；吸引人的事物", example: "tourist attraction" },
  "reflection": { phonetic: "/rɪˈflekʃn/", meaning: "n. 反射；反思；倒影", example: "on reflection" },
  "correspondence": { phonetic: "/ˌkɔːrəˈspɑːndəns/", meaning: "n. 通信；对应关系", example: "business correspondence" },
  "blame": { phonetic: "/bleɪm/", meaning: "v. 责备，归咎于 n. 责任", example: "blamed faulty batteries" },
  "humiliating": { phonetic: "/hjuːˈmɪlieɪtɪŋ/", meaning: "adj. 羞辱的，丢脸的", example: "a humiliating recall" },
  "recall": { phonetic: "/rɪˈkɔːl/", meaning: "v./n. 召回；回忆", example: "product recall" },
  "flagship": { phonetic: "/ˈflæɡʃɪp/", meaning: "n. 旗舰；主打产品", example: "flagship smartphone" },
  "entertain": { phonetic: "/ˌentərˈteɪn/", meaning: "v. 娱乐；考虑，怀有（想法）", example: "entertaining several possibilities" },
  "recollect": { phonetic: "/ˌrekəˈlekt/", meaning: "v. 回忆，记起", example: "recollecting memories" },
  "reconcile": { phonetic: "/ˈrekənsaɪl/", meaning: "v. 调和，使和解", example: "reconciling differences" },
  "overseas": { phonetic: "/ˌoʊvərˈsiːz/", meaning: "adv./adj. 在海外，国外的", example: "working overseas" },

  // ---- 完形填空 Passage 词汇 ----
  "traditionally": { phonetic: "/trəˈdɪʃənəli/", meaning: "adv. 传统上，历来", example: "traditionally associated with" },
  "literature": { phonetic: "/ˈlɪtrətʃər/", meaning: "n. 文学；文献", example: "literature classes" },
  "isolation": { phonetic: "/ˌaɪsəˈleɪʃn/", meaning: "n. 隔离，孤立", example: "in isolation" },
  "poetic": { phonetic: "/poʊˈetɪk/", meaning: "adj. 诗的，诗歌的", example: "poetic language" },
  "primarily": { phonetic: "/praɪˈmerəli/", meaning: "adv. 主要地，首要地", example: "primarily as an element" },
  "consequently": { phonetic: "/ˈkɑːnsɪkwentli/", meaning: "adv. 因此，所以", example: "Consequently, many people..." },
  "associate": { phonetic: "/əˈsoʊʃieɪt/", meaning: "v. 联想；联系；交往", example: "associate metaphors with literature" },
  "literary": { phonetic: "/ˈlɪtəreri/", meaning: "adj. 文学的", example: "literary arts" },
  "imagination": { phonetic: "/ɪˌmædʒɪˈneɪʃn/", meaning: "n. 想象，想象力", example: "acts of imagination" },
  "tangible": { phonetic: "/ˈtændʒəbl/", meaning: "adj. 有形的，可触摸的", example: "a tangible object" },
  "visible": { phonetic: "/ˈvɪzəbl/", meaning: "adj. 可见的，明显的", example: "give visible forms" },
  "comparison": { phonetic: "/kəmˈpærɪsn/", meaning: "n. 比较，对比", example: "invent a comparison" },
  "conventional": { phonetic: "/kənˈvenʃənl/", meaning: "adj. 传统的，常规的", example: "conventional metaphor" },
  "unconventional": { phonetic: "/ˌʌnkənˈvenʃənl/", meaning: "adj. 非传统的，不寻常的", example: "unconventional metaphor" },
  "disjointed": { phonetic: "/dɪsˈdʒɔɪntɪd/", meaning: "adj. 不连贯的，杂乱无章的", example: "disjointed phenomena" },
  "involved": { phonetic: "/ɪnˈvɑːlvd/", meaning: "adj. 涉及的，有关的", example: "involved in the way" },
  "habit": { phonetic: "/ˈhæbɪt/", meaning: "n. 习惯，习性", example: "the habit of metaphorical thinking" },
  "position": { phonetic: "/pəˈzɪʃn/", meaning: "v./n. 放置；位置；立场", example: "position stories and songs" },
  "connect": { phonetic: "/kəˈnekt/", meaning: "v. 连接，联系", example: "connecting ideas" },
  "concept": { phonetic: "/ˈkɑːnsept/", meaning: "n. 概念，观念", example: "two concepts" },
  "invent": { phonetic: "/ɪnˈvent/", meaning: "v. 发明，创造", example: "invent a comparison" },
  "target": { phonetic: "/ˈtɑːrɡɪt/", meaning: "n. 目标，对象", example: "the target domain" },
  "source": { phonetic: "/sɔːrs/", meaning: "n. 来源，出处", example: "the source domain" },

  // ---- 阅读理解 Passage 1 词汇 ----
  "resident": { phonetic: "/ˈrezɪdənt/", meaning: "n. 居民，住户 adj. 居住的", example: "about fifteen other residents" },
  "depressing": { phonetic: "/dɪˈpresɪŋ/", meaning: "adj. 令人沮丧的，压抑的", example: "It was depressing." },
  "revolutionary": { phonetic: "/ˌrevəˈluːʃəneri/", meaning: "adj. 革命性的，创新的", example: "a revolutionary concept" },
  "residential": { phonetic: "/ˌrezɪˈdenʃl/", meaning: "adj. 住宅的，居住的", example: "residential home" },
  "cuddle": { phonetic: "/ˈkʌdl/", meaning: "n./v. 拥抱，搂抱", example: "a kind lap to sit on and a cuddle" },
  "enormous": { phonetic: "/ɪˈnɔːrməs/", meaning: "adj. 巨大的，庞大的", example: "enormous advantages" },
  "individual": { phonetic: "/ˌɪndɪˈvɪdʒuəl/", meaning: "adj. 个人的，个体的 n. 个人", example: "individual attention" },
  "psychological": { phonetic: "/ˌsaɪkəˈlɑːdʒɪkl/", meaning: "adj. 心理的，心理学的", example: "psychological health" },
  "breakdown": { phonetic: "/ˈbreɪkdaʊn/", meaning: "n. 崩溃；分解；故障", example: "the breakdown of the extended family" },
  "desperately": { phonetic: "/ˈdespərətli/", meaning: "adv. 拼命地；极度地", example: "desperately need more support" },
  "initiative": { phonetic: "/ɪˈnɪʃətɪv/", meaning: "n. 倡议；主动性；主动权", example: "successful initiatives" },
  "conflict": { phonetic: "/ˈkɑːnflɪkt/", meaning: "n. 冲突，矛盾 v. 冲突", example: "less conflict in a community" },
  "tolerance": { phonetic: "/ˈtɑːlərəns/", meaning: "n. 容忍，宽容；耐受力", example: "as much understanding and tolerance as possible" },
  "isolated": { phonetic: "/ˈaɪsəleɪtɪd/", meaning: "adj. 孤立的，隔离的", example: "feel isolated" },
  "loneliness": { phonetic: "/ˈloʊnlinəs/", meaning: "n. 孤独，寂寞", example: "put an end to loneliness" },
  "community": { phonetic: "/kəˈmjuːnəti/", meaning: "n. 社区；群体；共同体", example: "what community really means" },
  "combine": { phonetic: "/kəmˈbaɪn/", meaning: "v. 结合，联合", example: "combining a residential home with a nursery" },
  "atmosphere": { phonetic: "/ˈætməsfɪr/", meaning: "n. 气氛，氛围；大气层", example: "The atmosphere was depressing." },
  "decoration": { phonetic: "/ˌdekəˈreɪʃn/", meaning: "n. 装饰，装潢", example: "The decoration was clean and warm." },

  // ---- 阅读理解 Passage 2 词汇 ----
  "liquor": { phonetic: "/ˈlɪkər/", meaning: "n. 烈酒，酒精饮料", example: "bad reaction to liquor" },
  "belligerent": { phonetic: "/bəˈlɪdʒərənt/", meaning: "adj. 好斗的，挑衅的", example: "turn belligerent" },
  "spiciness": { phonetic: "/ˈspaɪsinəs/", meaning: "n. 辛辣；尖刻；激烈", example: "all the spiciness would come to the surface" },
  "decorous": { phonetic: "/ˈdekərəs/", meaning: "adj. 得体的，有礼貌的", example: "the most decorous voice" },
  "errand": { phonetic: "/ˈerənd/", meaning: "n. 差事，跑腿", example: "run an errand in the store" },
  "outspoken": { phonetic: "/aʊtˈspoʊkən/", meaning: "adj. 直言不讳的，坦率的", example: "too outspoken and overbearing" },
  "overbearing": { phonetic: "/ˌoʊvərˈberɪŋ/", meaning: "adj. 专横的，傲慢的", example: "too outspoken and overbearing" },
  "harsh": { phonetic: "/hɑːrʃ/", meaning: "adj. 严厉的，刺耳的", example: "a harsh solemnity" },
  "solemnity": { phonetic: "/səˈlemnəti/", meaning: "n. 庄严，严肃", example: "a harsh solemnity" },
  "despise": { phonetic: "/dɪˈspaɪz/", meaning: "v. 鄙视，轻视", example: "she despised her varied personal influences" },
  "varied": { phonetic: "/ˈverid/", meaning: "adj. 多样的，各种各样的", example: "varied personal influences" },
  "venture": { phonetic: "/ˈventʃər/", meaning: "n. 冒险；企业；风险项目", example: "a series of failed ventures" },
  "produce": { phonetic: "/ˈprɑːduːs/", meaning: "n. 农产品 v. 生产", example: "cleaning produce for a greengrocer" },
  "greengrocer": { phonetic: "/ˈɡriːnɡroʊsər/", meaning: "n. 蔬菜水果商", example: "a greengrocer" },
  "haul": { phonetic: "/hɔːl/", meaning: "v. 拖，拉，搬运", example: "hauling and cleaning produce" },
  "infant": { phonetic: "/ˈɪnfənt/", meaning: "n. 婴儿，幼儿", example: "infant's daughter" },
  "pride": { phonetic: "/praɪd/", meaning: "n. 骄傲，自豪", example: "defend his pride" },
  "reward": { phonetic: "/rɪˈwɔːrd/", meaning: "n./v. 奖励，回报", example: "working hard only when reward is within sight" },
  "criticism": { phonetic: "/ˈkrɪtɪsɪzəm/", meaning: "n. 批评，批判", example: "answered with some criticism" },
  "approachable": { phonetic: "/əˈproʊtʃəbl/", meaning: "adj. 平易近人的，可接近的", example: "an approachable person" },
  "independent": { phonetic: "/ˌɪndɪˈpendənt/", meaning: "adj. 独立的，自主的", example: "an independent woman" },
  "stubborn": { phonetic: "/ˈstʌbərn/", meaning: "adj. 顽固的，固执的", example: "a stubborn person" },
  "unsuccessful": { phonetic: "/ˌʌnsəkˈsesfl/", meaning: "adj. 不成功的，失败的", example: "an unsuccessful person" },
  "mixed": { phonetic: "/mɪkst/", meaning: "adj. 混合的；复杂的", example: "mixed feelings" },
  "prejudice": { phonetic: "/ˈpredʒudɪs/", meaning: "n. 偏见，成见", example: "a strong prejudice against" },

  // ---- 阅读理解 Passage 3 词汇 ----
  "jungle": { phonetic: "/ˈdʒʌŋɡl/", meaning: "n. 丛林，密林", example: "deep in the jungles of Colombia" },
  "perfume": { phonetic: "/pərˈfjuːm/", meaning: "n. 香水；香味 v. 使充满香气", example: "unique perfume" },
  "vine": { phonetic: "/vaɪn/", meaning: "n. 藤蔓，葡萄藤", example: "in a vine that only blooms" },
  "bloom": { phonetic: "/bluːm/", meaning: "v. 开花 n. 花；开花期", example: "only blooms for a few days" },
  "orchid": { phonetic: "/ˈɔːrkɪd/", meaning: "n. 兰花", example: "types of orchids" },
  "species": { phonetic: "/ˈspiːʃiːz/", meaning: "n. 物种，种类", example: "rare and delicate species" },
  "delicate": { phonetic: "/ˈdelɪkət/", meaning: "adj. 精致的，脆弱的；微妙的", example: "delicate species" },
  "prize": { phonetic: "/praɪz/", meaning: "v. 珍视 n. 奖品", example: "have been prized by discoverers" },
  "explorer": { phonetic: "/ɪkˈsplɔːrər/", meaning: "n. 探险者，探索者", example: "discoverers, explorers, and adventurers" },
  "fragile": { phonetic: "/ˈfrædʒl/", meaning: "adj. 脆弱的，易碎的", example: "fragile plants" },
  "pollinate": { phonetic: "/ˈpɑːləneɪt/", meaning: "v. 授粉", example: "plants that can self-pollinate" },
  "pollen": { phonetic: "/ˈpɑːlən/", meaning: "n. 花粉", example: "spread their pollen" },
  "stigma": { phonetic: "/ˈstɪɡmə/", meaning: "n. 柱头；耻辱，污名", example: "produced by the flower's stigma" },
  "reproduce": { phonetic: "/ˌriːprəˈduːs/", meaning: "v. 繁殖，生殖；复制", example: "genetic material for the plant to reproduce" },
  "evolve": { phonetic: "/ɪˈvɑːlv/", meaning: "v. 进化；逐步发展", example: "orchids evolved a vast array" },
  "lure": { phonetic: "/lʊr/", meaning: "v. 引诱，诱惑 n. 诱惑物", example: "smell like something to lure insects" },
  "beetle": { phonetic: "/ˈbiːtl/", meaning: "n. 甲虫", example: "bees, beetles or flies" },
  "cedar": { phonetic: "/ˈsiːdər/", meaning: "n. 雪松，杉木", example: "smell like pure cedar" },
  "vanilla": { phonetic: "/vəˈnɪlə/", meaning: "n. 香草", example: "some like vanilla" },
  "habitat": { phonetic: "/ˈhæbɪtæt/", meaning: "n. 栖息地，生长环境", example: "as a part of their habitat" },
  "pollinator": { phonetic: "/ˈpɑːlɪneɪtər/", meaning: "n. 传粉者", example: "very specific pollinator" },
  "specialisation": { phonetic: "/ˌspeʃəlaɪˈzeɪʃn/", meaning: "n. 专业化，特化", example: "evolutionary specialisation" },
  "impressive": { phonetic: "/ɪmˈpresɪv/", meaning: "adj. 令人印象深刻的", example: "still very impressive" },
  "mysterious": { phonetic: "/mɪˈstɪriəs/", meaning: "adj. 神秘的", example: "in mysterious ways" },
  "efficient": { phonetic: "/ɪˈfɪʃnt/", meaning: "adj. 高效的，有效率的", example: "in efficient ways" },
  "synthesize": { phonetic: "/ˈsɪnθəsaɪz/", meaning: "v. 合成；综合", example: "To synthesize information" },
  "highly": { phonetic: "/ˈhaɪli/", meaning: "adv. 高度地；非常", example: "highly specialized" },
  "genetic": { phonetic: "/dʒəˈnetɪk/", meaning: "adj. 基因的，遗传的", example: "genetic material" },
  "evolutionary": { phonetic: "/ˌiːvəˈluːʃəneri/", meaning: "adj. 进化的，演变的", example: "evolutionary specialisation" },

  // ---- 听力会话词汇 ----
  "membership": { phonetic: "/ˈmembərʃɪp/", meaning: "n. 会员资格，会籍", example: "gym membership" },
  "budget": { phonetic: "/ˈbʌdʒɪt/", meaning: "n. 预算 adj. 便宜的", example: "budget membership" },
  "cancellation": { phonetic: "/ˌkænsəˈleɪʃn/", meaning: "n. 取消，注销", example: "cancellation fees" },
  "minimum": { phonetic: "/ˈmɪnɪməm/", meaning: "adj. 最小的，最低的 n. 最小值", example: "minimum contract period" },
  "contract": { phonetic: "/ˈkɑːntrækt/", meaning: "n. 合同，契约", example: "a minimum contract" },
  "assessment": { phonetic: "/əˈsesmənt/", meaning: "n. 评估，评定", example: "fitness assessments" },
  "brochure": { phonetic: "/broʊˈʃʊr/", meaning: "n. 小册子，宣传手册", example: "Our brochure states..." },
  "tailor": { phonetic: "/ˈteɪlər/", meaning: "v. 量身定制 n. 裁缝", example: "a fully tailored exercise plan" },
  "demonstrate": { phonetic: "/ˈdemənstreɪt/", meaning: "v. 演示，展示；证明", example: "demonstrate every movement" },
  "nutrition": { phonetic: "/nuˈtrɪʃn/", meaning: "n. 营养，营养学", example: "nutrition guidance" },
  "coach": { phonetic: "/koʊtʃ/", meaning: "n. 教练 v. 指导，训练", example: "ongoing nutrition coaching" },
  "introductory": { phonetic: "/ˌɪntrəˈdʌktəri/", meaning: "adj. 入门的，介绍性的", example: "introductory sessions" },
  "facility": { phonetic: "/fəˈsɪləti/", meaning: "n. 设施，设备；便利", example: "our facilities" },
  "workout": { phonetic: "/ˈwɜːrkaʊt/", meaning: "n. 锻炼，训练", example: "reasons behind each workout" },
  "recommendation": { phonetic: "/ˌrekəmenˈdeɪʃn/", meaning: "n. 推荐，建议", example: "trainer's recommendation" },
  "competitive": { phonetic: "/kəmˈpetətɪv/", meaning: "adj. 有竞争力的；竞争的", example: "competitive rates" },
  "personalized": { phonetic: "/ˈpɜːrsənəlaɪzd/", meaning: "adj. 个性化的，量身定制的", example: "personalized evaluation" },
  "evaluation": { phonetic: "/ɪˌvæljuˈeɪʃn/", meaning: "n. 评估，评价", example: "a personalized evaluation" },
  "exercise": { phonetic: "/ˈeksərsaɪz/", meaning: "n./v. 锻炼，运动；练习", example: "do exercise at 2 in the morning" },

  // ---- Conversation Two 词汇 ----
  "automotive": { phonetic: "/ˌɔːtəˈmoʊtɪv/", meaning: "adj. 汽车的，机动车的", example: "automotive engineering" },
  "aerodynamics": { phonetic: "/ˌeroʊdaɪˈnæmɪks/", meaning: "n. 空气动力学", example: "engines, performance, aerodynamics" },
  "alternative": { phonetic: "/ɔːlˈtɜːrnətɪv/", meaning: "adj. 替代的 n. 替代品", example: "alternative fuels" },
  "hybrid": { phonetic: "/ˈhaɪbrɪd/", meaning: "adj. 混合的 n. 混合体", example: "hybrid vehicles" },
  "hydrogen": { phonetic: "/ˈhaɪdrədʒən/", meaning: "n. 氢", example: "hydrogen fuel cells" },
  "autonomous": { phonetic: "/ɔːˈtɑːnəməs/", meaning: "adj. 自主的，自动驾驶的", example: "autonomous cars" },
  "mindset": { phonetic: "/ˈmaɪndset/", meaning: "n. 心态，思维模式", example: "public mindset" },
  "barrier": { phonetic: "/ˈbæriər/", meaning: "n. 障碍，壁垒", example: "the main barrier" },
  "infrastructure": { phonetic: "/ˈɪnfrəstrʌktʃər/", meaning: "n. 基础设施", example: "infrastructure is another big obstacle" },
  "obstacle": { phonetic: "/ˈɑːbstəkl/", meaning: "n. 障碍，妨碍", example: "another big obstacle" },
  "congestion": { phonetic: "/kənˈdʒestʃən/", meaning: "n. 拥堵，拥挤", example: "traffic jams and congestion" },
  "manual": { phonetic: "/ˈmænjuəl/", meaning: "adj. 手动的，人工的 n. 手册", example: "manual driving" },
  "impractical": { phonetic: "/ɪmˈpræktɪkl/", meaning: "adj. 不切实际的", example: "seem impractical" },
  "astronomical": { phonetic: "/ˌæstrəˈnɑːmɪkl/", meaning: "adj. 天文的；极其巨大的", example: "astronomical production costs" },
  "insight": { phonetic: "/ˈɪnsaɪt/", meaning: "n. 洞察力，深刻见解", example: "thanks for sharing your insights" },
  "mainstream": { phonetic: "/ˈmeɪnstriːm/", meaning: "n. 主流 adj. 主流的", example: "become mainstream" },
  "rural": { phonetic: "/ˈrʊrəl/", meaning: "adj. 乡村的，农村的", example: "rural country roads" },
  "destination": { phonetic: "/ˌdestɪˈneɪʃn/", meaning: "n. 目的地", example: "input your destination" },
  "thrill": { phonetic: "/θrɪl/", meaning: "n. 兴奋，激动 v. 使兴奋", example: "the thrill of driving" },

  // ---- 听力讲座 Talk 词汇 ----
  "intercultural": { phonetic: "/ˌɪntərˈkʌltʃərəl/", meaning: "adj. 跨文化的", example: "intercultural communication" },
  "symbolic": { phonetic: "/sɪmˈbɑːlɪk/", meaning: "adj. 符号的，象征的", example: "symbolic exchange" },
  "negotiate": { phonetic: "/nɪˈɡoʊʃieɪt/", meaning: "v. 协商，谈判", example: "negotiate shared meanings" },
  "embedded": { phonetic: "/ɪmˈbedɪd/", meaning: "adj. 嵌入的，内嵌的", example: "embedded societal system" },
  "verbal": { phonetic: "/ˈvɜːrbl/", meaning: "adj. 口头的，言语的", example: "verbal symbols" },
  "nonverbal": { phonetic: "/nɑːnˈvɜːrbl/", meaning: "adj. 非语言的", example: "nonverbal symbols" },
  "interdependent": { phonetic: "/ˌɪntərdɪˈpendənt/", meaning: "adj. 相互依赖的", example: "interdependent nature" },
  "mutually": { phonetic: "/ˈmjuːtʃuəli/", meaning: "adv. 相互地，共同地", example: "mutually interdependent" },
  "ritual": { phonetic: "/ˈrɪtʃuəl/", meaning: "n. 仪式，礼节", example: "greeting rituals" },
  "ethnic": { phonetic: "/ˈeθnɪk/", meaning: "adj. 民族的，种族的", example: "an ethnic group" },
  "gender": { phonetic: "/ˈdʒendər/", meaning: "n. 性别", example: "a gender group" },
  "context": { phonetic: "/ˈkɑːntekst/", meaning: "n. 背景，语境；环境", example: "multi-layered context" },
  "outcome": { phonetic: "/ˈaʊtkʌm/", meaning: "n. 结果，成果", example: "the outcome of the encounter" },
  "diversity": { phonetic: "/daɪˈvɜːrsəti/", meaning: "n. 多样性，差异", example: "more diversity" },
  "homogeneous": { phonetic: "/ˌhoʊməˈdʒiːniəs/", meaning: "adj. 同质的，同类的", example: "a homogeneous community" },
  "geographic": { phonetic: "/ˌdʒiːəˈɡræfɪk/", meaning: "adj. 地理的", example: "a geographic location" },
  "boundary": { phonetic: "/ˈbaʊndri/", meaning: "n. 边界，界限", example: "clear-cut boundaries" },
  "intimate": { phonetic: "/ˈɪntɪmət/", meaning: "adj. 亲密的；私密的", example: "intimate details" },

  // ---- 写作相关词汇 ----
  "fragmented": { phonetic: "/ˈfræɡməntɪd/", meaning: "adj. 碎片化的，零散的", example: "fragmented attention span" },
  "snippet": { phonetic: "/ˈsnɪpɪt/", meaning: "n. 片段，小片", example: "each tiny snippet" },
  "encode": { phonetic: "/ɪnˈkoʊd/", meaning: "v. 编码", example: "encode and absorb" },
  "absorb": { phonetic: "/əbˈzɔːrb/", meaning: "v. 吸收；理解", example: "absorb bits and pieces" },
  "linear": { phonetic: "/ˈlɪniər/", meaning: "adj. 线性的，直线的", example: "long linear thinking" },
  "sustained": { phonetic: "/səˈsteɪnd/", meaning: "adj. 持续的", example: "sustained thinking" },
  "creative": { phonetic: "/kriˈeɪtɪv/", meaning: "adj. 创造性的，有创意的", example: "be creative" },
  "rely": { phonetic: "/rɪˈlaɪ/", meaning: "v. 依赖，依靠", example: "rely on various tools" },
  "access": { phonetic: "/ˈækses/", meaning: "n./v. 获取，访问；进入", example: "access to our culture" },
  "media": { phonetic: "/ˈmiːdiə/", meaning: "n. 媒体，媒介", example: "social media" },
  "technology": { phonetic: "/tekˈnɑːlədʒi/", meaning: "n. 技术，科技", example: "as far as technology is concerned" },
  "educator": { phonetic: "/ˈedʒukeɪtər/", meaning: "n. 教育工作者", example: "parents, teachers, and educators" },
  "flip": { phonetic: "/flɪp/", meaning: "v. 快速翻动，浏览", example: "flipping through his phone" },
  "separate": { phonetic: "/ˈsepərət/", meaning: "adj. 分开的，单独的 v. 分开", example: "separate pieces of information" },
  "span": { phonetic: "/spæn/", meaning: "n. 跨度；持续时间 v. 跨越", example: "attention span" },
  "fragment": { phonetic: "/ˈfræɡmənt/", meaning: "v./n. 碎片化；碎片", example: "fragmented learning" },
  "multi-tasking": { phonetic: "/ˌmʌltiˈtæskɪŋ/", meaning: "n. 多任务处理", example: "skill at multi-tasking" },

  // ---- 听写 Passage 词汇 ----
  "ecological": { phonetic: "/ˌiːkəˈlɑːdʒɪkl/", meaning: "adj. 生态的，生态学的", example: "ecological conservation" },
  "conservation": { phonetic: "/ˌkɑːnsərˈveɪʃn/", meaning: "n. 保护，保存", example: "ecological conservation of the Yellow River" },
  "basin": { phonetic: "/ˈbeɪsn/", meaning: "n. 流域；盆地；盆", example: "the Yellow River basin" },
  "remarkable": { phonetic: "/rɪˈmɑːrkəbl/", meaning: "adj. 显著的，非凡的", example: "remarkable progress" },
  "progress": { phonetic: "/ˈprɑːɡres/", meaning: "n./v. 进步，进展", example: "has made remarkable progress" },
  "significant": { phonetic: "/sɪɡˈnɪfɪkənt/", meaning: "adj. 重要的；显著的", example: "a significant increase" },
  "protection": { phonetic: "/prəˈtekʃn/", meaning: "n. 保护，防护", example: "ecological protection" },
  "proportion": { phonetic: "/prəˈpɔːrʃn/", meaning: "n. 比例；部分", example: "the proportion of surface water" },
  "surface": { phonetic: "/ˈsɜːrfɪs/", meaning: "n. 表面，表层", example: "surface water" },
  "rated": { phonetic: "/ˈreɪtɪd/", meaning: "adj. 评定的，评级的", example: "water rated at grades 1 to 3" },
  "effort": { phonetic: "/ˈefərt/", meaning: "n. 努力，尽力", example: "continued efforts" },

  // ---- 2024 完形填空词汇 ----
  "digital": { phonetic: "/ˈdɪdʒɪtl/", meaning: "adj. 数字的，数码的", example: "the digital revolution" },
  "revolution": { phonetic: "/ˌrevəˈluːʃn/", meaning: "n. 革命；重大变革", example: "the digital revolution" },
  "profoundly": { phonetic: "/prəˈfaʊndli/", meaning: "adv. 深刻地，极大地", example: "profoundly transformed" },
  "transform": { phonetic: "/trænsˈfɔːrm/", meaning: "v. 转变，改变", example: "transformed the way we communicate" },
  "consequence": { phonetic: "/ˈkɑːnsɪkwens/", meaning: "n. 后果，结果", example: "one significant consequence" },
  "distinction": { phonetic: "/dɪˈstɪŋkʃn/", meaning: "n. 区别，差别；荣誉", example: "the blurring of the distinction" },
  "facilitate": { phonetic: "/fəˈsɪlɪteɪt/", meaning: "v. 促进，使便利", example: "facilitated the sharing" },
  "unprecedented": { phonetic: "/ʌnˈpresɪdentɪd/", meaning: "adj. 前所未有的", example: "on an unprecedented scale" },
  "undermine": { phonetic: "/ˌʌndərˈmaɪn/", meaning: "v. 逐渐削弱，暗中破坏", example: "privacy has been undermined" },
  "reluctant": { phonetic: "/rɪˈlʌktənt/", meaning: "adj. 不情愿的，勉强的", example: "reluctant to question" },
  "overwhelming": { phonetic: "/ˌoʊvərˈwelmɪŋ/", meaning: "adj. 压倒性的，巨大的", example: "overwhelming volume" },
  "maintain": { phonetic: "/meɪnˈteɪn/", meaning: "v. 维持，保持；维护", example: "maintaining control" },
  "diminish": { phonetic: "/dɪˈmɪnɪʃ/", meaning: "v. 减少，缩小；减弱", example: "shows no sign of diminishing" },
  "interaction": { phonetic: "/ˌɪntərˈækʃn/", meaning: "n. 互动，交流", example: "digital interaction" },
  "preserve": { phonetic: "/prɪˈzɜːrv/", meaning: "v. 保护，保存；保持", example: "preserve privacy" },
  "shift": { phonetic: "/ʃɪft/", meaning: "n./v. 转变，转移；轮班", example: "a significant shift" },
  "emerging": { phonetic: "/ɪˈmɜːrdʒɪŋ/", meaning: "adj. 新兴的，出现的", example: "emerging technologies" },
  "blur": { phonetic: "/blɜːr/", meaning: "v./n. 模糊，使模糊", example: "the blurring of the distinction" },
  "sphere": { phonetic: "/sfɪr/", meaning: "n. 领域，范围；球体", example: "public and private spheres" },
  "platform": { phonetic: "/ˈplætfɔːrm/", meaning: "n. 平台", example: "social media platforms" },
  "visibility": { phonetic: "/ˌvɪzəˈbɪləti/", meaning: "n. 可见度，能见度；曝光度", example: "online visibility" },
  "footprint": { phonetic: "/ˈfʊtprɪnt/", meaning: "n. 足迹，脚印；影响范围", example: "digital footprint" },
  "reshape": { phonetic: "/riːˈʃeɪp/", meaning: "v. 重塑，改变", example: "reshaping our understanding" },
  "openness": { phonetic: "/ˈoʊpənnəs/", meaning: "n. 开放，坦诚", example: "this openness comes at a cost" },
  "privacy": { phonetic: "/ˈpraɪvəsi/", meaning: "n. 隐私，私密", example: "Privacy has been gradually undermined." },
  "granted": { phonetic: "/ˈɡræntɪd/", meaning: "adv. 理所当然地", example: "taken for granted" },
  "misuse": { phonetic: "/ˌmɪsˈjuːz/", meaning: "v./n. 滥用，误用", example: "data might be misused" },

  // ---- 2024 语言知识词汇 ----
  "detective": { phonetic: "/dɪˈtektɪv/", meaning: "n. 侦探 adj. 侦探的", example: "the detective spent hours" },
  "scrutinize": { phonetic: "/ˈskruːtənaɪz/", meaning: "v. 仔细检查，审查", example: "scrutinizing the evidence" },
  "scan": { phonetic: "/skæn/", meaning: "v. 浏览，扫描", example: "scanning the document" },
  "glance": { phonetic: "/ɡlæns/", meaning: "v./n. 瞥一眼，扫视", example: "glancing at the page" },
  "observe": { phonetic: "/əbˈzɜːrv/", meaning: "v. 观察，观测；遵守", example: "observing the behavior" },
  "indispensable": { phonetic: "/ˌɪndɪˈspensəbl/", meaning: "adj. 不可或缺的，必需的", example: "an indispensable tool" },
  "proficiency": { phonetic: "/prəˈfɪʃnsi/", meaning: "n. 熟练，精通", example: "demonstrate proficiency" },
  "lucid": { phonetic: "/ˈluːsɪd/", meaning: "adj. 清晰易懂的，明晰的", example: "a lucid explanation" },
  "emission": { phonetic: "/ɪˈmɪʃn/", meaning: "n. 排放物，排放", example: "carbon emissions" },
  "implement": { phonetic: "/ˈɪmplɪment/", meaning: "v. 实施，执行", example: "implemented new policies" },
  "regard": { phonetic: "/rɪˈɡɑːrd/", meaning: "v. 认为，看待 n. 尊重", example: "is regarded as" },
  "acknowledge": { phonetic: "/əkˈnɑːlɪdʒ/", meaning: "v. 承认；感谢", example: "acknowledged to be" },
  "reckon": { phonetic: "/ˈrekən/", meaning: "v. 认为，估计；计算", example: "is reckoned as" },
  "promising": { phonetic: "/ˈprɑːmɪsɪŋ/", meaning: "adj. 有前途的，有希望的", example: "most promising young scientist" },
  "candidate": { phonetic: "/ˈkændɪdeɪt/", meaning: "n. 候选人；应试者", example: "two candidates" },
  "applicant": { phonetic: "/ˈæplɪkənt/", meaning: "n. 申请人", example: "the number of applicants" },
  "regulation": { phonetic: "/ˌreɡjuˈleɪʃn/", meaning: "n. 规定，规章；管理", example: "safety regulations" },
  "laboratory": { phonetic: "/ˈlæbrətɔːri/", meaning: "n. 实验室", example: "entering the laboratory" },
  "conduct": { phonetic: "/kənˈdʌkt/", meaning: "v. 进行，实施；指挥 n. 行为", example: "conducting the experiment" },
  "contribution": { phonetic: "/ˌkɑːntrɪˈbjuːʃn/", meaning: "n. 贡献；捐款", example: "outstanding contribution" },
  "activist": { phonetic: "/ˈæktɪvɪst/", meaning: "n. 活动家，积极分子", example: "the activist received a national award" },
  "viral": { phonetic: "/ˈvaɪrəl/", meaning: "adj. 病毒式的；病毒性的", example: "gone viral on social media" },
  "deadline": { phonetic: "/ˈdedlaɪn/", meaning: "n. 截止日期", example: "the deadline has been extended" },
  "extend": { phonetic: "/ɪkˈstend/", meaning: "v. 延长，扩展；提供", example: "deadline has been extended" },
  "conference": { phonetic: "/ˈkɑːnfərəns/", meaning: "n. 会议，大会", example: "attend the international conference" },
  "schedule": { phonetic: "/ˈskedʒuːl/", meaning: "v./n. 安排，预定；时间表", example: "is scheduled to attend" },
  "suitable": { phonetic: "/ˈsuːtəbl/", meaning: "adj. 合适的，适宜的", example: "suitable for the position" },
  "submit": { phonetic: "/səbˈmɪt/", meaning: "v. 提交；服从", example: "submit a report by Friday" },
  "climate": { phonetic: "/ˈklaɪmət/", meaning: "n. 气候；氛围", example: "a series of lectures on climate change" },
  "safety": { phonetic: "/ˈseɪfti/", meaning: "n. 安全，安全性", example: "safety regulations" },
  "experiment": { phonetic: "/ɪkˈsperɪmənt/", meaning: "n./v. 实验，试验", example: "the experiment for three months" },
  "outstanding": { phonetic: "/aʊtˈstændɪŋ/", meaning: "adj. 杰出的，突出的", example: "outstanding contribution" },
  "environmental": { phonetic: "/ɪnˌvaɪrənˈmentl/", meaning: "adj. 环境的", example: "environmental protection" },
  "newly": { phonetic: "/ˈnuːli/", meaning: "adv. 最近，新近", example: "newly discovered species" },
  "official": { phonetic: "/əˈfɪʃl/", meaning: "adj. 官方的，正式的", example: "under official protection" },
  "manager": { phonetic: "/ˈmænɪdʒər/", meaning: "n. 经理，管理者", example: "The manager, together with his team" },
  "pandemic": { phonetic: "/pænˈdemɪk/", meaning: "n. 大流行病 adj. 大流行的", example: "The COVID-19 pandemic" },
  "institution": { phonetic: "/ˌɪnstɪˈtuːʃn/", meaning: "n. 机构；制度", example: "educational institutions" },
  "transition": { phonetic: "/trænˈzɪʃn/", meaning: "n./v. 过渡，转变", example: "this transition was challenging" },
  "potential": { phonetic: "/pəˈtenʃl/", meaning: "n. 潜力 adj. 潜在的", example: "the potential of digital education" },
  "feedback": { phonetic: "/ˈfiːdbæk/", meaning: "n. 反馈，回馈", example: "immediate feedback" },
  "supplement": { phonetic: "/ˈsʌplɪmənt/", meaning: "n./v. 补充，增补", example: "a supplement to traditional classroom" },
  "replacement": { phonetic: "/rɪˈpleɪsmənt/", meaning: "n. 替代，替换", example: "a replacement for traditional classroom" },

  // ---- 听写 + 通用学术词汇 ----
  "comprehension": { phonetic: "/ˌkɑːmprɪˈhenʃn/", meaning: "n. 理解，理解力", example: "listening comprehension" },
  "dictation": { phonetic: "/dɪkˈteɪʃn/", meaning: "n. 听写；口述", example: "Part I Dictation" },
  "bilingualism": { phonetic: "/baɪˈlɪŋɡwəlɪzəm/", meaning: "n. 双语能力，双语现象", example: "the benefits of bilingualism" },
  "cognitive": { phonetic: "/ˈkɑːɡnətɪv/", meaning: "adj. 认知的，认识的", example: "cognitive flexibility" },
  "flexibility": { phonetic: "/ˌfleksəˈbɪləti/", meaning: "n. 灵活性，弹性", example: "cognitive flexibility" },
  "executive": { phonetic: "/ɪɡˈzekjətɪv/", meaning: "adj. 执行的 n. 高管", example: "executive function" },
  "onset": { phonetic: "/ˈɑːnset/", meaning: "n. 开始，发作", example: "delayed onset" },
  "metalinguistic": { phonetic: "/ˌmetəlɪŋˈɡwɪstɪk/", meaning: "adj. 元语言的", example: "metalinguistic awareness" },
  "awareness": { phonetic: "/əˈwernəs/", meaning: "n. 意识，认识", example: "metalinguistic awareness" },
  "sensitivity": { phonetic: "/ˌsensəˈtɪvəti/", meaning: "n. 敏感性，灵敏度", example: "cultural sensitivity" },
  "academic": { phonetic: "/ˌækəˈdemɪk/", meaning: "adj. 学术的 n. 学者", example: "academic performance" },
  "lifelong": { phonetic: "/ˈlaɪflɔːŋ/", meaning: "adj. 终身的，毕生的", example: "lifelong learning" },
  "traditional": { phonetic: "/trəˈdɪʃənl/", meaning: "adj. 传统的", example: "traditional classroom education" },
  "replace": { phonetic: "/rɪˈpleɪs/", meaning: "v. 替代，取代", example: "replace traditional classroom" },
  "online": { phonetic: "/ˌɑːnˈlaɪn/", meaning: "adj./adv. 在线的，联网的", example: "online learning" },
  "decade": { phonetic: "/ˈdekeɪd/", meaning: "n. 十年", example: "for over a decade" },
  "global": { phonetic: "/ˈɡloʊbl/", meaning: "adj. 全球的，全世界的", example: "global economy" },
  "economy": { phonetic: "/ɪˈkɑːnəmi/", meaning: "n. 经济；节约", example: "global economy" },
  "transportation": { phonetic: "/ˌtrænspɔːrˈteɪʃn/", meaning: "n. 交通，运输", example: "transportation systems" },
  "instruction": { phonetic: "/ɪnˈstrʌkʃn/", meaning: "n. 指示，说明；教学", example: "exam instructions" },
  "audience": { phonetic: "/ˈɔːdiəns/", meaning: "n. 观众，听众；读者", example: "a global audience" },
  "scale": { phonetic: "/skeɪl/", meaning: "n. 规模；比例；刻度", example: "on an unprecedented scale" },
  "trend": { phonetic: "/trend/", meaning: "n. 趋势，潮流", example: "the trend shows no sign of diminishing" },
  "century": { phonetic: "/ˈsentʃəri/", meaning: "n. 世纪，百年", example: "in the 21st century" },
  "generation": { phonetic: "/ˌdʒenəˈreɪʃn/", meaning: "n. 代，世代；产生", example: "younger generations" },
};

// ==================== 2025年真题 ====================
const TEM4_2025 = {
  year: 2025,
  title: "2025年英语专业四级真题",
  
  // 考试说明
  examInstructions: {
    dictation: `PART I DICTATION (10 MIN)

Listen to the following passage. Altogether the passage will be read to you four times. During the first reading, which will be done at normal speed, listen and try to understand the meaning. For the second and third readings, the passage will be read sentence by sentence, or phrase by phrase, with intervals of 15 seconds. The last reading will be read at normal speed again and during this time, you should check your work. You will then be given ONE minute to check your work once more.

Write on ANSWER SHEET ONE. The first sentence of the passage is already provided.`,

    listening: `PART II LISTENING COMPREHENSION (20 MIN)

SECTION A TALK
In this section you will hear a talk. You will hear the talk ONCE ONLY. While listening, you may look at the task on ANSWER SHEET ONE and write NO MORE THAN THREE WORDS for each gap. Make sure what you fill in is both grammatically and semantically acceptable. You may use the blank sheet for note-taking.
You have THIRTY seconds to preview the gap-filling task.
Now, listen to the talk. When it is over, you will be given TWO minutes to check your work.

SECTION B CONVERSATIONS
In this section you will hear two conversations. At the end of each conversation, five questions will be asked about what was said. Both the conversations and the questions will be spoken ONCE ONLY. After each question there will be a ten-second pause. During the pause, you should read the four choices of A, B, C and D, and mark the best answer to each question on ANSWER SHEET TWO.
You have THIRTY seconds to preview the choices.
Now, listen to the conversations.`,

    grammar: `PART III LANGUAGE USAGE (10 MIN)

There are twenty sentences in this section. Beneath each sentence there are four words or phrases marked A, B, C and D. Choose one word or phrase that best completes the sentence.
Mark your answers on ANSWER SHEET TWO.`,

    cloze: `PART IV CLOZE (10 MIN)

Decide which of the words given in the box below would best complete the passage if inserted in the corresponding blanks. The words can be used ONCE ONLY.
Mark the letter of the answer on ANSWER SHEET TWO.`,

    reading: `PART V READING COMPREHENSION (35 MIN)

SECTION A MULTIPLE CHOICE QUESTIONS
In this section there are three passages followed by ten multiple choice questions. For each multiple choice question, there are four suggested answers marked A, B, C and D. Choose the one that you think is the best answer.

SECTION B SHORT ANSWER QUESTIONS
In this section there are five short answer questions based on the passages in Section A. Answer the questions with NO MORE THAN TEN WORDS.`,

    writing: `PART VI WRITING (45 MIN)

Read carefully the following excerpt, and then write your response in NO LESS THAN 200 WORDS, in which you should:
● summarize the main message of the excerpt, and then
● comment on the topic from your own perspective.

Marks will be awarded for content relevance, content sufficiency, organization and language quality.
Write your response on ANSWER SHEET THREE.`
  },

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
      { key: "G", word: "jointly" }, { key: "H", word: "nurturing" },
      { key: "I", word: "ornamental" }, { key: "J", word: "readily" },
      { key: "K", word: "separate" }, { key: "L", word: "style" },
      { key: "M", word: "supplementary" }, { key: "N", word: "sustaining" },
      { key: "O", word: "used" }
    ],
    passage: "Traditionally, the subject of metaphor tends to come up in literature classes where everyone learns that a metaphor is a figure of speech: \"No man is an island.\" It's learned first as an element of (31)________, a way to polish language. Metaphors are first brought to our attention in poems, mostly, but we're taught to recognize them in stories and songs too: \"She's got the moon in her eyes.\" Consequently, many people associate metaphors most (32)________ with the literary arts and understand them as a matter of language — a figure of speech. But metaphors are also a tool for discovering and connecting ideas — a figure of thought.\n\nWhether (33)________ or conceptual, metaphors are acts of imagination. To see one thing in terms of another is to think (34)________. That is, we set up correspondences between two concepts. This involves partially structuring our understanding of an abstract object (love, for example) by seeing it in terms of a rather (35)________ object (say, a garden). Thus we can think and talk about \"cultivating\" (36)________ and \"tending to\" our friendships. The process of setting up such correspondences is called \"mapping.\" By mapping gardens onto love, which are otherwise two (37)________ conceptual domains, we invite a comparison and give visible forms to an abstract idea. \"Gardens\" is the source domain from which we draw properties that can be (38)________ to \"love,\" the target domain. Through metaphors, both conventional and unconventional, we build and lay claim to (39)________ among otherwise discrete phenomena. The habit of metaphorical thinking belongs to everyone. Metaphor is very much involved in the way they (40)________, talk about, and most of all, experience the world.",
    answers: { 31: "L", 32: "J", 33: "I", 34: "B", 35: "E", 36: "H", 37: "K", 38: "A", 39: "C", 40: "D" },
    explanations: {
      31: "style = 风格。隐喻首先被当作一种风格元素来学习，'an element of style'，用来润色语言。",
      32: "readily = 容易地、自然地。人们很自然地将隐喻与文学艺术联系在一起。",
      33: "ornamental = 装饰性的。无论是装饰性的还是概念性的，隐喻都是想象的行为。与conceptual并列。",
      34: "associatively = 联想地。将一事物视为另一事物就是进行联想性思维。后文'建立对应关系'也印证了'联想'这一概念。",
      35: "concrete = 具体的。通过具体的事物（如花园）来理解抽象的概念（如爱），与abstract形成对比。",
      36: "nurturing = 培养、滋养。'cultivating nurturing and tending to our friendships' — 耕耘、滋养和照料友谊，三个动词都与园艺隐喻相关。",
      37: "separate = 分开的、独立的。两个原本分离的概念领域之间建立映射。形容词修饰conceptual domains。",
      38: "applied = 应用。从源域(gardens)提取的属性可以被应用到目标域(love)。",
      39: "coherence = 连贯性。隐喻在离散现象之间建立连贯性，'build and lay claim to coherence among discrete phenomena'。",
      40: "conceptualize = 概念化。隐喻深深参与了人们概念化世界、谈论世界和体验世界的方式。与'think'和'experience'并列，都是认知动词。"
    }
  },

  // PART II SECTION B — Conversation One (Q1-5)
  conversationOneScript: `W: Hello, welcome to Dream Fitness and Health Center. How can I help you?
M: Yes, I've been meaning to come in and find some information about here for some time. I was wondering if you could help me?
W: Sure, of course. What would you like to know?
M: I saw on the sign outside that you have the best budget membership in the city. Is that right?
W: You've got that right, yes. If you find a better price, then we'll match it. Also, we don't have any sign-up fees or cancellation fees.
M: Sorry, what was that last bit?
W: Cancellation fees. Some gyms charge you money if you leave before a minimum number of months or something like that. We don't do that.
M: That's useful to know. When do you open normally?
W: We open at 5 AM and close at midnight.
M: Not 24 hours then.
W: No, almost though. We tried doing the 24 hour thing, but there really weren't a lot of people who wanted to do exercise at 2 in the morning.
M: Makes sense. Another question: do you have trainers? Like, will you do a personalized evaluation of me?
W: Sure, we do. As we say on our brochure, we can show you what to do, how to do it, and why you're doing it. Have you worked with a personal trainer before?
M: No, no, I haven't.
W: So it's very easy. For your first few visits, we'll assign you one of our expert personal trainers. He or she will design an exercise plan that's just right for you and show you exactly what to do.
M: Let me get this straight: all of this is included in the price?
W: Yes, it is. But except nutrition advice. If you want to continue with your trainer after the first few classes, we can talk about that. It does cost extra, though.
M: Okay, yeah, sounds great.
W: Do you have any other questions?
M: Yeah, okay. Why should I choose here instead of any of the other gyms in the city?
W: What, you mean apart from our competitive rates and personalized attention?
M: Yeah, I guess.
W: Listen, here's a free day pass. Why don't you drop by and see for yourself? That way you can talk to other members, see the facilities and our staff.
M: Okay, I'll do that. Thanks very much.`,
  conversationOne: [
    { id: "conv1_1", stem: "Where did the man get the membership information?", options: { A: "From other members of the center.", B: "From the center's brochure.", C: "From the trainer's recommendation.", D: "From the sign outside the center." }, answer: "D", explanation: "男士说 'I saw on the sign outside you offer the best budget membership in the city.' 他是通过外面的标识了解到会员信息的。" },
    { id: "conv1_2", stem: "Which fees does this gym charge its members?", options: { A: "Sign-up fees.", B: "Cancellation fees.", C: "Membership fees.", D: "Facility fees." }, answer: "C", explanation: "女士明确说 'we charge no sign-up fees or cancellation fees'，因此只收取会员费。" },
    { id: "conv1_3", stem: "How long is the gym open each day?", options: { A: "19 hours.", B: "24 hours.", C: "5 hours.", D: "12 hours." }, answer: "A", explanation: "营业时间是早上5点到午夜(24点)，共19小时。女士说'not 24 hours'。" },
    { id: "conv1_4", stem: "What can we learn about the exercise plan introduced by the woman?", options: { A: "It includes nutrition advice.", B: "It is detailed in the brochure.", C: "It is charged at competitive rates.", D: "It is made by a personal trainer." }, answer: "D", explanation: "女士提到 'They will design a fully tailored exercise plan and demonstrate every movement for you.' 锻炼计划是由私人教练制定的。" },
    { id: "conv1_5", stem: "When does the man have to pay extra cost?", options: { A: "When the trainer shows him what to do in the gym.", B: "When the trainer provides him with nutrition advice.", C: "When the trainer offers him a personalized evaluation.", D: "When the trainer designs an exercise plan for him." }, answer: "B", explanation: "女士说 'Nutrition guidance is separate, though. If you want ongoing nutrition coaching after the introductory sessions, there will be extra charges.' 营养指导需要额外付费。" }
  ],

  // PART II SECTION B — Conversation Two (Q6-10)
  conversationTwoScript: `W: Hello Mark, you mentioned that you actually studied automotive engineering?
M: Yeah, that's correct.
W: Okay, can you explain what automotive engineering is?
M: It's basically car design technology, like the engine, the performance, the aerodynamics. So it's basically an overview of all kinds of car aspects for the future.
W: Cool, so you must know a lot about the cars of the future and stuff. I mean, how do you see cars in, let's say, 20 years, 40 years?
M: Well, in the near future, I think the big developments will be alternative fuels. You know, we're going to eventually run out of natural resources. So I think the developments will be toward electric or hybrid cars.
W: Right.
M: Maybe even using fuel cells such as hydrogen.
W: Well, like, how many years away do you think this is?
M: Major car manufacturers have already started producing electric cars and we're now seeing people driving electric cars on the road. But it would perhaps be some years away before we see everyone using them, I guess.
W: Right now, I once met a student who was an engineer and he was saying that they already have cars that can drive without people, autonomous, self-driving cars. Like you can just say your location and it'll go there. Have you heard about that?
M: I've seen the technology from a few companies as well. The problem with this technology, it's brilliant, it's amazing what it can do, but people's attitude is the problem. People like the sense of freedom from having a car.
W: Right.
M: And if your car is driving you, then you lose that. It's like being on a train or something. So you lose that individual sense of freedom.
W: Wow, that's right, that's a good point.
M: And then there's the infrastructure.
W: Oh, so you think that basically it'll never take off, that people will always want to drive their own cars?
M: Possibly. Although maybe they could develop a system where in the inner cities, the system is used basically to help because traffic flow and congestion is a problem.
W: Right.
M: So maybe within the cities, the system could be used, but outside of the city, people would always want their freedom. In the country roads, the thrill of driving, the excitement, you know, that sort of thing.
W: Right now, when you watch movies, you often see cars that can fly or cars that can go underwater, like in some movies. Do you see that maybe in the future?
M: Underwater, I think, would be a bit pointless and very difficult to achieve, the engineering. It's possible now, but the engineering is just ridiculously high tech. But I don't know about the flying cars, maybe in hundreds of years, but certainly not in my lifetime.
W: No. All right, thanks a lot, Mark.`,
  conversationTwo: [
    { id: "conv2_6", stem: "According to the man, what is involved in automotive engineering?", options: { A: "Engine.", B: "Infrastructure.", C: "Fuel cells.", D: "Alternative fuels." }, answer: "A", explanation: "男士说汽车工程包括 'vehicle design technology, including engines, performance, aerodynamics'，涵盖引擎、性能和空气动力学。" },
    { id: "conv2_7", stem: "According to the man, what will people lose if they have a self-driving car?", options: { A: "Sense of judgment.", B: "Sense of freedom.", C: "Driving skills.", D: "Repairing skills." }, answer: "B", explanation: "男士说 'If a car drives you automatically, you lose that feeling...You give up individual driving freedom.' 人们会失去自由感。" },
    { id: "conv2_8", stem: "Where does the man propose using self-driving cars?", options: { A: "In country roads.", B: "In less congested areas.", C: "In inner city areas.", D: "In emergency cases." }, answer: "C", explanation: "男士说 'self-driving vehicles operate only in inner cities to ease traffic jams and congestion'，建议在市中心使用。" },
    { id: "conv2_9", stem: "What kind of feeling do the drivers have on the country roads?", options: { A: "Excitement.", B: "Peacefulness.", C: "Stimulation.", D: "Hopefulness." }, answer: "A", explanation: "男士说 'on rural country roads, people will still want the thrill and excitement of manual driving'，乡村道路上人们追求手动驾驶的兴奋感。" },
    { id: "conv2_10", stem: "What is the conversation about?", options: { A: "Future of electric cars.", B: "Future of self-driving cars.", C: "Design of future cars.", D: "Future of different cars." }, answer: "D", explanation: "对话围绕未来汽车展开，讨论了替代燃料、自动驾驶、飞行汽车和水下汽车等话题，主题是不同类型汽车的未来。" }
  ],

  // PART V SECTION A — Reading Comprehension (Q41-50)
  reading: {
    passages: [
      {
        title: "PASSAGE ONE — Inter-generational Care",
        paragraphs: [
          "(1) Six months before she died, my grandmother moved into an old people's home and I visited her there. She was sitting in the living room with about fifteen other residents, mostly women, half of them asleep. The room was clean and warm, with flowers and pictures, and the care assistants were kind and cheerful. A talk show was on the television, and the only other sound was snoring and embarrassing digestive noises. People only moved when they needed to be helped to the bathroom. It was depressing. Gran talked a lot about how much she missed seeing her grandchildren, but I knew from my sister that they hated going to visit her there and, to be perfectly honest, I couldn't wait to get away myself.",
          "(2) So I was interested to read a newspaper article about a new concept in old people's homes. The idea is simple, but revolutionary: combining a residential home for the elderly with a nursery school in the same building. The children and the residents eat lunch together and share activities such as music, painting, gardening and caring for the pets which the residents are encouraged to keep. In the afternoons, the residents enjoy reading or telling stories to the children and, if a child is feeling sad or tired, there is always a kind lap to sit on and a cuddle. There are trips out and birthday parties too.",
          "(3) The advantages are enormous for everyone concerned. The children are happy because they get a lot more individual attention and respond well because someone has time for them. They also learn that old people are not different or frightening in any way. And of course, they see illness and death and learn to accept them. The residents are happy because they feel useful and needed. They are more active and more interested in life when the children are around and they take more interest in their appearance too. And the staff are happy because they see an improvement in the physical and psychological health of the residents.",
          "(4) Nowadays there is less and less contact between the old and the young. There are many reasons for this, including the breakdown of the extended family, working parents with no time to care for ageing relations, families that have moved away and smaller flats with no room for grandparents. But the result is the same: increasing numbers of children without grandparents and old people who have no contact with children. And more old people who are lonely and feel useless, along with more and more families with young children who desperately need more support. It's a major problem in many societies.",
          "(5) That's why inter-generational programs, designed to bring the old and the young together, are growing in popularity all over the world, supported by UNESCO and other local and international organizations. There are examples of successful initiatives all over the world. Using young people to teach IT skills to older people is one obvious example. Using old people as volunteer assistants in schools is another, perhaps reading with children who need extra attention. There are schemes which involve older people visiting families who are having problems, maybe looking after the children for a while to give the tired mother a break. Or \"adopt a grandparent\" schemes in which children write letters or visit a lonely old person in their area. There are even holiday companies that specialize in holidays for children and grandparents together. One of the successful schemes pairs young volunteers with old people who are losing their sight. The young people help with practical things such as helping with online shopping, and the older people can pass on their knowledge and experience to their young visitors. For example, a retired judge may be paired with a teenager who wants to study law. Lasting friendships often develop.",
          "(6) But it isn't only the individuals concerned who gain from inter-generational activities. The advantages to society are enormous too. If older people can understand and accept the youth of today, and vice versa, there will be less conflict in a community. In a world where the number of old people is increasing, we need as much understanding and tolerance as possible. Modern society has isolated people into age groups and now we need to rediscover what \"community\" really means. And we can use the strengths of one generation to help another. Then perhaps getting old won't be such a depressing prospect after all."
        ],
        questions: [
          { id: "2025_r41", num: 41, stem: "What does \"It\" in Para. 1 refer to?", options: { A: "The talk show.", B: "The decoration.", C: "The atmosphere.", D: "The bathroom." }, answer: "C", explanation: "Para.1 最后一句 'It was depressing.' 中的 It 指代前文描述的养老院的整体氛围(atmosphere)——老人们半睡半醒，只有电视节目和打鼾声。" },
          { id: "2025_r42", num: 42, stem: "Which of the following statements is INCORRECT according to Para. 3?", options: { A: "Children get more attention than old people.", B: "Old people have a sense of usefulness.", C: "Old people take more interest in appearance.", D: "Staff notice improvement in the residents." }, answer: "A", explanation: "Para.3中提到孩子们获得很多个别关注，但并未说孩子们比老人获得更多关注。B、C、D在Para.3中均有明确提及。" },
          { id: "2025_r43", num: 43, stem: "The author uses ______ to explain the program's popularity in Para. 5.", options: { A: "comparison", B: "contrast", C: "cause and effect", D: "exemplification" }, answer: "D", explanation: "Para.5中作者通过大量举例(exemplification)来说明代际项目的普及：年轻人教老人IT技能、老人做学校志愿者、领养祖父母计划、假期公司等。" },
          { id: "2025_r44", num: 44, stem: "The following are the advantages of inter-generational activities EXCEPT ______.", options: { A: "redefining the meaning of community", B: "slowing down the process of isolation", C: "reducing conflicts between generations", D: "promoting mutual understanding and help" }, answer: "B", explanation: "A、C、D在Para.6中均有提及。文章强调要'结束孤独'(put an end to loneliness)，而非'减缓(slowing down)隔离过程'。" }
        ]
      },
      {
        title: "PASSAGE TWO — Uncle Chul",
        paragraphs: [
          "(1) My father's youngest brother, Uncle Chul, shared the Lee's famously bad reaction to liquor, which was to turn beet-red in the face, grow dizzy and finally get sick. In spite of this, he was always happy to stay up late at family gatherings. After a few glasses of whisky he would really loosen up, and, with the notable exception of my mother, we all appreciated his rough language and stories. Only when Mother came in from the kitchen would his talk soften, for he knew he had always fallen short in her eyes. If they were ever alone together, say in the kitchen, after dinner, he would use the most decorous (得体的) voice in asking for a glass or a fresh bucket of ice, and even offer to help load the dishwasher or run an errand to the store.",
          "(2) On one of those nights we sped off, both happy for a break in the long evening. He asked me about school, what sports I was playing, but the conversation inevitably turned toward my parents, and particularly my mother — how much she had invested in me, that I was her great hope. I thought it was odd that he was speaking this way, like my other relatives, and I answered with some criticism of her — that she was too anxious and overbearing. He stared at me and, with a hard solemnity I had not heard from him before, said that my mother was one of the finest people one could ever know. He kept a grip on the wheel and in the ensuing quiet of the drive I could sense how he must have both admired and despised her. In many respects, my mother was an unrelenting woman. She tended to measure people by the mark of a few principles of conduct: ask no help from anyone, always plan for the long run and practice (her own variation of) the golden rule, which was to treat others much better than oneself.",
          "(3) In her mind, Uncle Chul surely lacked on all these accounts. In the weeks following our drive, my father would be deciding whether to lend him $10,000 to start a business. As always after dinner, my parents sat in the kitchen and spoke in Korean, under the light of a fluorescent ring. My mother, in many ways the director of the family, questioned my uncle's character and will. Hadn't he performed poorly in school, failed to finish college? Hadn't he spent most of his youth perfecting his skills as a black belt in tae kwon do (跆拳道) and his billiards game? Wasn't he a gambler in spirit?",
          "(4) My father could defend him only weakly. Uncle Chul had a history of working hard only when reward was well within sight, like cash piled high on the end of a pool table. His older brothers were all respected professionals and academics. My father was a doctor, a psychiatrist who had taught himself English in order to practice in Vancouver. Uncle Chul had left Korea after a series of failed ventures and odd jobs, and found himself broke with a wife and new baby. How valuable were his tae kwon do trophies now? What could he possibly do in this country?",
          "(5) My parents argued fiercely and my father left the kitchen. But as was my mother's way, she kept on pushing her side of the issue, thinking aloud. My father was throwing away his hard-earned money on the naive wish that his little brother had magically changed. Uncle Chul was a poor risk and even now was complaining about his present job, hauling and cleaning produce for a greengrocer. He would get to the store at 4 a.m. to prepare vegetables for the day's selling. While he shared a sofa bed with his nephew in his older brother's tiny apartment, his wife and infant daughter were still in Seoul, waiting for him to make enough money to send for them."
        ],
        questions: [
          { id: "2025_r45", num: 45, stem: "Uncle Chul had ______ the author's mother.", options: { A: "a critical attitude towards", B: "a strong prejudice against", C: "fond memories of", D: "mixed feelings towards" }, answer: "D", explanation: "Uncle Chul对作者母亲态度复杂：他在她面前表现得彬彬有礼(decorous voice)，但同时又admired and despised her，呈现混合情感(mixed feelings)。" },
          { id: "2025_r46", num: 46, stem: "We can infer from the passage that the author's mother was NOT ______.", options: { A: "approachable", B: "independent", C: "strong-minded", D: "overbearing" }, answer: "D", explanation: "文中描述母亲有原则、独立(ask no help from anyone)、意志坚定(unrelenting)，但文章暗示她并不专横(overbearing)。作者批评她'overbearing'只是个人看法，整体形象并非如此。" },
          { id: "2025_r47", num: 47, stem: "We learn from the passage that Uncle Chul was a(n) ______ person.", options: { A: "stubborn", B: "unsuccessful", C: "helpful", D: "adaptive" }, answer: "B", explanation: "文中描述Uncle Chul经历了一系列失败的投资(failed ventures)，做着一份搬运清洁农产品的工作，是个poor risk，说明他是不成功的(unsuccessful)。" }
        ]
      },
      {
        title: "PASSAGE THREE — Orchids",
        paragraphs: [
          "(1) Deep in the jungles of Colombia there is a kind of flower that attracts bees with its unique perfume. In Venezuela there is a flower people collect for its large white or yellow petals. Few people ever find it, though, since it only blooms for a few days. There is a small pink and yellow flower that only grows in a very specific part of the state of Florida. It also only grows on trees, and wind or birds may spread its seeds. These flowers are some of the most rare and delicate species in all of nature. They are all types of orchids (兰花).",
          "(2) For hundreds of years orchids have been prized discoveries of collectors and adventurers hoping to find new and exotic breeds of the flower. In her book *The Orchid Thief*, author Susan Orlean tells how in the 1800s orchids became popular in Europe, which made them very valuable. Many \"orchid hunters\" set out to find and bring back new types of orchids to sell. However, many of the men who went looking for the mysterious orchids met with tragedy instead.",
          "(3) While the plants have long been valued for their beauty, they may be even more important to science and our understanding of co-evolution. Unlike plants that can self-pollinate (自传花粉), orchids need very specific insects or birds to spread their pollen (花粉). Pollen is a powder produced by plants that contains their genetic material. In order for the plants to reproduce, the pollen must be physically moved to the flower's stigma (柱头), which contains an egg. Now the fertilized egg can become a seed. Birds and insects can pollinate plants by touching many different flowers and spreading pollen around.",
          "(4) Orchids evolved to attract insects and birds. Because there are many different species of orchid, there are also many different ways the orchids attract their pollinators. Orlean explains that \"many species look so much like their favorite insects that the insect mistakes them for kin [other insects], and when it lands on the flower to visit, pollen sticks to its body...\" Another orchid imitates the shape of something that a pollinating insect likes to kill... Other species look like the mate of their pollinator, so the insect tries to mate with one orchid and then another... and spreads pollen from flower to flower each hopeless time.",
          "(5) Other orchids don't use their shape at all, but rather produce specialized scents to attract specific insects, such as bees, beetles or flies. Some orchids smell like cake, some like chocolate, and some like rotting meat. All these smells may seem weird, but they exist to lure pollinators in and their pollen can go on. Each family of orchids has a unique strategy to attract insects and spread their flowers' pollen go on and on. Each family of orchids has a unique kind of insect or bird that visits their flowers, as well as its own way of attracting them. It has worked, too. According to NOVA a science television series, \"orchid species number more than 25,000 worldwide.\" That is more kinds of species than any other flower on the planet, and new ones are still being found.",
          "(6) Orchids and the insects that pollinate them are one of the most amazing examples of evolution. Though their degree of co-dependence varies, as it is apparent that at least some orchids are more reliant on their pollinators than the pollinators are on the orchids, the degree of evolutionary specialization is still very impressive. Research suggests that certain species of orchid evolved specifically to attract certain bees, which circulate wide varieties in preparation for mating. In another case, an orchid mimics a female insect's smells that appeals to its pollens, and the male goes out getting nothing out of the bargains whatsoever. By"
        ],
        questions: [
          { id: "2025_r48", num: 48, stem: "What does the word \"prized\" in Para.2 mean?", options: { A: "Symbolic.", B: "Precious.", C: "Selected.", D: "Winning." }, answer: "B", explanation: "prized 在此意为'珍贵的、宝贵的'(precious)。Para.2说兰花几百年来一直被收藏家和探险者视为珍贵的发现(prized discoveries)。" },
          { id: "2025_r49", num: 49, stem: "How do orchids reproduce according to Para. 3?", options: { A: "They are pollinated by birds or insects.", B: "They are self-pollinated to have seeds.", C: "They are pollinated by winds.", D: "They are collected and bred by humans." }, answer: "A", explanation: "Para.3明确指出兰花不同于自花授粉植物，需要特定的昆虫或鸟类来传播花粉。" },
          { id: "2025_r50", num: 50, stem: "We learn from the passage that orchids attract insects in ______ ways.", options: { A: "mysterious", B: "similar", C: "varied", D: "efficient" }, answer: "C", explanation: "Para.4-5描述了兰花吸引昆虫的多种方式：模仿昆虫外形、模仿猎物、模仿配偶、散发香味等，因此是多种多样的(varied)。" }
        ]
      }
    ],
    // SECTION B Short Answer Questions (Q51-55)
    shortAnswers: [
      { id: "2025_sa51", num: 51, stem: "Why is the idea revolutionary for old people (Para. 2)?", reference: "It provides opportunities for them to interact with children.", explanation: "这个想法革命性在于为老人提供了与儿童互动的机会。" },
      { id: "2025_sa52", num: 52, stem: "Explain \"with the notable exception of my mother\" in Para. 1.", reference: "His mother alone dislikes Uncle Chul's rough language and stories.", explanation: "这句话意思是\"除了我母亲这个明显的例外\"，说明只有母亲不喜欢Uncle Chul的粗鲁语言和故事。" },
      { id: "2025_sa53", num: 53, stem: "Cite one example of Mother's principles of conduct in Para. 2.", reference: "Ask no help from anyone. / Plan for the long run. / Treat others much better than oneself.", explanation: "文中列举了母亲的几条行为准则，任选其一即可。" },
      { id: "2025_sa54", num: 54, stem: "Cite two ways in which orchids attract insects to pollinate for them (Paras. 4 & 5).", reference: "Imitating the shape relevant to their pollinators; producing specialized scents.", explanation: "兰花通过模仿传粉者的形状和产生特殊气味两种方式吸引昆虫。" },
      { id: "2025_sa55", num: 55, stem: "What does the word \"tricking\" (Para. 6) mean?", reference: "Deceiving. / Cheating.", explanation: "tricking在此意为\"欺骗\"。" }
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
    script: `Good morning everyone. Today we're going to talk about intercultural communication. You know, with rapid changes in the global economy, technology and transportation systems, the world is becoming a small and intersecting community. We are having increased contact with people from different parts of the world, and they are culturally different. They bring with them different work habits and cultural practices. For example, cultural strangers may use different approaches to solve problems or have different nonverbal emotional expressions. They may develop friendships with different expectations. They may also have different emphasis in an intercultural encounter. In fact, people are now constantly moving across borders. Neighborhoods and communities are changing. Thus, in what was once a homogeneous community, we may now find more diversity and cultural values.

So what is intercultural communication? Well, it can be defined as a symbolic exchange process. And in this process, individuals from two or more different cultural communities attempt to negotiate shared meanings in a kind of interactive situation within an embedded societal system. Now let's look at some of the key words in that definition. And there are also the major characteristics of intercultural communication. They are: symbolic exchange process, different cultural communities, negotiating shared meanings, and an embedded societal system.

The first characteristic is symbolic exchange. It refers to the use of verbal and nonverbal symbols between two or more individuals to accomplish shared meanings. Verbal symbols represent the spoken or written aspects of our message exchange process, and non-verbal symbols or cues such as smiles represent another aspect of our message exchange process. Then, spoken or written aspects of communication, they are about the content information that we want to convey. A point I want to mention here is that verbal messages always include the use of nonverbal cues such as accents, intonations, and volume.

Now, the second characteristic is process. This refers to the interdependent nature of the intercultural encounter. This means once two cultural strangers make contact, an attempt to communicate, they enter into a mutually interdependent relationship. What does it mean? Let me give you an example. A Japanese business person may be bowing, while a European business person may be ready to shake hands. The two may also quickly reverse their nonverbal greeting rituals and adapt to each other's behavior. Okay?

The third characteristic of intercultural communication is different cultural communities. This is a broad concept. What is a cultural community? It refers to a group of interacting individuals within a bounded unit, and these people possess a set of shared traditions and ways of life. This bounded unit can refer to a geographic location with clear-cut boundaries, such as a nation. This unit can also refer to a set of shared beliefs and values by a group of individuals, even if they live in different parts of the world. Thus, broadly interpreted, a cultural community can refer to a national cultural group, an ethnic group, or a gender group.

Now, the fourth characteristic, which is to negotiate shared meanings, refers to the general goal of any intercultural communication encounter. For instance, in intercultural business negotiations, a first level of concern is that we want our messages to be understood so that there is common ground to work on.

The fifth characteristic is societal embedded system. This refers to the multi-layered context involved in intercultural communication, such as history and politics. These contexts would affect the process and the outcome of the actual intercultural communication encounter.

Okay, to sum up, today we have briefly discussed the definition and some of the major characteristics of intercultural communication. Hope this will give you a better understanding of what intercultural communication is. Thank you.`,
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
    prompt: "Read carefully the following excerpt on the fragmented style of learning, and then write your response in NO LESS THAN 200 WORDS, in which you should:\n● summarize the main message of the excerpt, and then\n● comment on the fragmented style of learning from a learner's perspective.\n\nYou can support yourself with information from the excerpt.\nMarks will be awarded for content relevance, content sufficiency, organization and language quality. Failure to follow the above instructions may result in a loss of marks.",
    excerpt: "As far as technology is concerned, the world has changed for our generation, and as parents, teachers, leaders and educators, we are seeing the impact of that change on our children.\n\nThe average 14-year-old now absorbs five hours' worth of content for every hour that they are receiving information.\n\nHow? Well, your kid comes home from school and puts his headphones on. There's a TV on in the corner, and he is checking his emails, watching vlogs, and researching his homework. Within an hour he has absorbed more information than we have in a whole afternoon.\n\nYour kid is not \"multi-tasking\" as you might like to think; he does not take in separate pieces of information at exactly the same time — he is jumping between different tasks at incredible speeds.\n\nOur generation learned at school that we usually start something, follow it through and then move on to the next thing. But the children of today no longer learn in this way; they have a fragmented attention span due to the fragmented style of learning in which they receive information.\n\nI recently gave a speech, and my point is this: Stop blaming technology and embrace it. There is no point saying \"Don't look at the computer\"; instead be creative and show your child more interesting things to look at on the computer!\n\nThousands of years ago people got their messages across to others by carving them on a tree or on a stone; now we have Social Media. Let's move forward together with our children, and maybe we will all learn something along the way.",
    modelEssay: `The Pros and Cons of Fragmented Learning

In the digital age, fragmented learning has become a common way for students to acquire knowledge. While it offers convenience, it also presents challenges that require careful consideration.

Advantages
Fragmented learning makes education more accessible. With mobile apps and online resources, students can study anytime, anywhere—during commutes or breaks. This approach also makes learning more engaging through interactive content like videos and quizzes, helping to maintain interest. Additionally, it broadens knowledge by exposing learners to diverse topics quickly.

Disadvantages
However, this method can reduce focus. Constant switching between topics lowers efficiency, making it harder to retain information. Moreover, scattered knowledge often lacks depth, preventing a full understanding of complex subjects. Over time, this may weaken critical thinking skills.

Finding Balance
To benefit from fragmented learning while avoiding its pitfalls, students should:
Set clear goals to avoid mindless browsing.
Schedule dedicated time for deep, focused study.
Organize key points using notes or apps to connect ideas.
Limit screen time and include traditional reading.

Conclusion
Technology has transformed learning, and fragmented methods are here to stay. By combining quick information access with structured study, students can enhance efficiency without sacrificing depth. Balancing these approaches is key to succeeding in today's fast-paced world.

(Word count: 200)`,
    time: 45
  }
};

// ==================== 2024年真题 ====================
const TEM4_2024 = {
  year: 2024,
  title: "2024年英语专业四级真题",
  
  // 考试说明
  examInstructions: {
    dictation: `PART I DICTATION (10 MIN)

Listen to the following passage. Altogether the passage will be read to you four times. During the first reading, which will be done at normal speed, listen and try to understand the meaning. For the second and third readings, the passage will be read sentence by sentence, or phrase by phrase, with intervals of 15 seconds. The last reading will be read at normal speed again and during this time, you should check your work. You will then be given ONE minute to check your work once more.

Write on ANSWER SHEET ONE. The first sentence of the passage is already provided.`,

    listening: `PART II LISTENING COMPREHENSION (20 MIN)

SECTION A TALK
In this section you will hear a talk. You will hear the talk ONCE ONLY. While listening, you may look at the task on ANSWER SHEET ONE and write NO MORE THAN THREE WORDS for each gap. Make sure what you fill in is both grammatically and semantically acceptable. You may use the blank sheet for note-taking.
You have THIRTY seconds to preview the gap-filling task.
Now, listen to the talk. When it is over, you will be given TWO minutes to check your work.

SECTION B CONVERSATIONS
In this section you will hear two conversations. At the end of each conversation, five questions will be asked about what was said. Both the conversations and the questions will be spoken ONCE ONLY. After each question there will be a ten-second pause. During the pause, you should read the four choices of A, B, C and D, and mark the best answer to each question on ANSWER SHEET TWO.
You have THIRTY seconds to preview the choices.
Now, listen to the conversations.`,

    grammar: `PART III LANGUAGE USAGE (10 MIN)

There are twenty sentences in this section. Beneath each sentence there are four words or phrases marked A, B, C and D. Choose one word or phrase that best completes the sentence.
Mark your answers on ANSWER SHEET TWO.`,

    cloze: `PART IV CLOZE (10 MIN)

Decide which of the words given in the box below would best complete the passage if inserted in the corresponding blanks. The words can be used ONCE ONLY.
Mark the letter of the answer on ANSWER SHEET TWO.`,

    reading: `PART V READING COMPREHENSION (35 MIN)

SECTION A MULTIPLE CHOICE QUESTIONS
In this section there are three passages followed by ten multiple choice questions. For each multiple choice question, there are four suggested answers marked A, B, C and D. Choose the one that you think is the best answer.

SECTION B SHORT ANSWER QUESTIONS
In this section there are five short answer questions based on the passages in Section A. Answer the questions with NO MORE THAN TEN WORDS.`,

    writing: `PART VI WRITING (45 MIN)

Read carefully the following excerpt, and then write your response in NO LESS THAN 200 WORDS, in which you should:
● summarize the main message of the excerpt, and then
● comment on the topic from your own perspective.

Marks will be awarded for content relevance, content sufficiency, organization and language quality.
Write your response on ANSWER SHEET THREE.`
  },

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

// ==================== Audio Section Time Markers ====================
// Each exam's listening MP3 contains all sections sequentially.
// Define approximate start times (in seconds) for each section.
// These can be adjusted after listening to the actual audio file.
// Audio section markers (seconds).
// The dictation MP3 contains only Dictation (0:00 - ~7:54, including 1-min check silence).
// The listening MP3 starts at Part II instruction (~7:54 in original).
// Times below are offsets WITHIN the listening MP3 (relative to its start).
// Audio section markers (seconds).
// Dictation MP3 = original 0:00 – ~7:54 (incl. 1-min check silence).
// Listening MP3 = original ~7:54 – end. Times below are offsets WITHIN the listening MP3.
const AUDIO_MARKERS = {
  2025: {
    dictation: { start: 0, label: "听写 — Ecological Conservation of the Yellow River" },
    talk: { start: 72, label: "Talk — Intercultural Communication" },
    conversationOne: { start: 541, label: "会话一 — 健身中心" },
    conversationTwo: { start: 830, label: "会话二 — 未来汽车" },
  },
  2024: {
    dictation: { start: 0, label: "听写" },
    talk: { start: 72, label: "Talk — The Benefits of Bilingualism" },
    conversationOne: { start: 541, label: "会话一" },
    conversationTwo: { start: 830, label: "会话二" },
  }
};

// 全局真题库
const ALL_EXAMS = [TEM4_2025, TEM4_2024];
