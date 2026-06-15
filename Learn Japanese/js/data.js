// =============================================================================
// 日本語学習 — Pre-built Vocabulary & Grammar Data
// =============================================================================

export const CATEGORIES_VOCAB = [
  'Chào hỏi', 'Số đếm', 'Màu sắc', 'Gia đình', 'Đồ ăn & Uống',
  'Thời gian', 'Động từ', 'Tính từ', 'Đại từ & Chỉ định', 'Địa điểm'
];

export const CATEGORIES_GRAMMAR = ['Cơ bản', 'Giao tiếp', 'Yêu cầu & Đề nghị'];

// ---------------------------------------------------------------------------
// Vocabulary — ~100 words
// ---------------------------------------------------------------------------
export const VOCABULARY = [
  // ── Chào hỏi ──
  { id: 'v001', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Xin chào (ban ngày)', japanese: 'こんにちは', romaji: 'konnichiwa', level: 1 },
  { id: 'v002', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Chào buổi sáng', japanese: 'おはようございます', romaji: 'ohayou gozaimasu', level: 1 },
  { id: 'v003', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Chào buổi tối', japanese: 'こんばんは', romaji: 'konbanwa', level: 1 },
  { id: 'v004', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Tạm biệt', japanese: 'さようなら', romaji: 'sayounara', level: 1 },
  { id: 'v005', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Cảm ơn', japanese: 'ありがとうございます', romaji: 'arigatou gozaimasu', level: 1 },
  { id: 'v006', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Xin lỗi', japanese: 'すみません', romaji: 'sumimasen', level: 1 },
  { id: 'v007', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Vâng / Đúng', japanese: 'はい', romaji: 'hai', level: 1 },
  { id: 'v008', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Không', japanese: 'いいえ', romaji: 'iie', level: 1 },
  { id: 'v009', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Xin vui lòng', japanese: 'おねがいします', romaji: 'onegaishimasu', level: 1 },
  { id: 'v010', type: 'vocabulary', category: 'Chào hỏi', vietnamese: 'Không có gì', japanese: 'どういたしまして', romaji: 'douitashimashite', level: 1 },

  // ── Số đếm ──
  { id: 'v011', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Một', japanese: 'いち', romaji: 'ichi', level: 1 },
  { id: 'v012', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Hai', japanese: 'に', romaji: 'ni', level: 1 },
  { id: 'v013', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Ba', japanese: 'さん', romaji: 'san', level: 1 },
  { id: 'v014', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Bốn', japanese: 'よん', romaji: 'yon', level: 1 },
  { id: 'v015', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Năm', japanese: 'ご', romaji: 'go', level: 1 },
  { id: 'v016', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Sáu', japanese: 'ろく', romaji: 'roku', level: 1 },
  { id: 'v017', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Bảy', japanese: 'なな', romaji: 'nana', level: 1 },
  { id: 'v018', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Tám', japanese: 'はち', romaji: 'hachi', level: 1 },
  { id: 'v019', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Chín', japanese: 'きゅう', romaji: 'kyuu', level: 1 },
  { id: 'v020', type: 'vocabulary', category: 'Số đếm', vietnamese: 'Mười', japanese: 'じゅう', romaji: 'juu', level: 1 },

  // ── Màu sắc ──
  { id: 'v021', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Đỏ', japanese: 'あか', romaji: 'aka', level: 1 },
  { id: 'v022', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Xanh dương', japanese: 'あお', romaji: 'ao', level: 1 },
  { id: 'v023', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Vàng', japanese: 'きいろ', romaji: 'kiiro', level: 1 },
  { id: 'v024', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Trắng', japanese: 'しろ', romaji: 'shiro', level: 1 },
  { id: 'v025', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Đen', japanese: 'くろ', romaji: 'kuro', level: 1 },
  { id: 'v026', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Xanh lá', japanese: 'みどり', romaji: 'midori', level: 1 },
  { id: 'v027', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Cam', japanese: 'オレンジ', romaji: 'orenji', level: 1 },
  { id: 'v028', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Tím', japanese: 'むらさき', romaji: 'murasaki', level: 1 },
  { id: 'v029', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Hồng', japanese: 'ピンク', romaji: 'pinku', level: 1 },
  { id: 'v030', type: 'vocabulary', category: 'Màu sắc', vietnamese: 'Nâu', japanese: 'ちゃいろ', romaji: 'chairo', level: 1 },

  // ── Gia đình ──
  { id: 'v031', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Gia đình', japanese: 'かぞく', romaji: 'kazoku', level: 1 },
  { id: 'v032', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Bố', japanese: 'おとうさん', romaji: 'otousan', level: 1 },
  { id: 'v033', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Mẹ', japanese: 'おかあさん', romaji: 'okaasan', level: 1 },
  { id: 'v034', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Anh trai', japanese: 'おにいさん', romaji: 'oniisan', level: 1 },
  { id: 'v035', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Chị gái', japanese: 'おねえさん', romaji: 'oneesan', level: 1 },
  { id: 'v036', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Em trai', japanese: 'おとうと', romaji: 'otouto', level: 1 },
  { id: 'v037', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Em gái', japanese: 'いもうと', romaji: 'imouto', level: 1 },
  { id: 'v038', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Ông', japanese: 'おじいさん', romaji: 'ojiisan', level: 1 },
  { id: 'v039', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Bà', japanese: 'おばあさん', romaji: 'obaasan', level: 1 },
  { id: 'v040', type: 'vocabulary', category: 'Gia đình', vietnamese: 'Con / Trẻ em', japanese: 'こども', romaji: 'kodomo', level: 1 },

  // ── Đồ ăn & Uống ──
  { id: 'v041', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Cơm', japanese: 'ごはん', romaji: 'gohan', level: 1 },
  { id: 'v042', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Nước', japanese: 'みず', romaji: 'mizu', level: 1 },
  { id: 'v043', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Trà', japanese: 'おちゃ', romaji: 'ocha', level: 1 },
  { id: 'v044', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Cá', japanese: 'さかな', romaji: 'sakana', level: 1 },
  { id: 'v045', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Thịt', japanese: 'にく', romaji: 'niku', level: 1 },
  { id: 'v046', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Rau', japanese: 'やさい', romaji: 'yasai', level: 1 },
  { id: 'v047', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Hoa quả', japanese: 'くだもの', romaji: 'kudamono', level: 1 },
  { id: 'v048', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Trứng', japanese: 'たまご', romaji: 'tamago', level: 1 },
  { id: 'v049', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Sữa', japanese: 'ぎゅうにゅう', romaji: 'gyuunyuu', level: 1 },
  { id: 'v050', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Bánh mì', japanese: 'パン', romaji: 'pan', level: 1 },
  { id: 'v051', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Cà phê', japanese: 'コーヒー', romaji: 'koohii', level: 1 },
  { id: 'v052', type: 'vocabulary', category: 'Đồ ăn & Uống', vietnamese: 'Bia', japanese: 'ビール', romaji: 'biiru', level: 1 },

  // ── Thời gian ──
  { id: 'v053', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Hôm nay', japanese: 'きょう', romaji: 'kyou', level: 1 },
  { id: 'v054', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Ngày mai', japanese: 'あした', romaji: 'ashita', level: 1 },
  { id: 'v055', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Hôm qua', japanese: 'きのう', romaji: 'kinou', level: 1 },
  { id: 'v056', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Bây giờ', japanese: 'いま', romaji: 'ima', level: 1 },
  { id: 'v057', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Buổi sáng', japanese: 'あさ', romaji: 'asa', level: 1 },
  { id: 'v058', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Buổi trưa', japanese: 'ひる', romaji: 'hiru', level: 1 },
  { id: 'v059', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Buổi tối', japanese: 'よる', romaji: 'yoru', level: 1 },
  { id: 'v060', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Tuần', japanese: 'しゅう', romaji: 'shuu', level: 1 },
  { id: 'v061', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Tháng', japanese: 'つき', romaji: 'tsuki', level: 1 },
  { id: 'v062', type: 'vocabulary', category: 'Thời gian', vietnamese: 'Năm', japanese: 'とし', romaji: 'toshi', level: 1 },

  // ── Động từ ──
  { id: 'v063', type: 'vocabulary', category: 'Động từ', vietnamese: 'Ăn', japanese: 'たべる', romaji: 'taberu', level: 1 },
  { id: 'v064', type: 'vocabulary', category: 'Động từ', vietnamese: 'Uống', japanese: 'のむ', romaji: 'nomu', level: 1 },
  { id: 'v065', type: 'vocabulary', category: 'Động từ', vietnamese: 'Đi', japanese: 'いく', romaji: 'iku', level: 1 },
  { id: 'v066', type: 'vocabulary', category: 'Động từ', vietnamese: 'Đến', japanese: 'くる', romaji: 'kuru', level: 1 },
  { id: 'v067', type: 'vocabulary', category: 'Động từ', vietnamese: 'Xem / Nhìn', japanese: 'みる', romaji: 'miru', level: 1 },
  { id: 'v068', type: 'vocabulary', category: 'Động từ', vietnamese: 'Nghe', japanese: 'きく', romaji: 'kiku', level: 1 },
  { id: 'v069', type: 'vocabulary', category: 'Động từ', vietnamese: 'Nói', japanese: 'はなす', romaji: 'hanasu', level: 1 },
  { id: 'v070', type: 'vocabulary', category: 'Động từ', vietnamese: 'Đọc', japanese: 'よむ', romaji: 'yomu', level: 1 },
  { id: 'v071', type: 'vocabulary', category: 'Động từ', vietnamese: 'Viết', japanese: 'かく', romaji: 'kaku', level: 1 },
  { id: 'v072', type: 'vocabulary', category: 'Động từ', vietnamese: 'Mua', japanese: 'かう', romaji: 'kau', level: 1 },
  { id: 'v073', type: 'vocabulary', category: 'Động từ', vietnamese: 'Làm', japanese: 'する', romaji: 'suru', level: 1 },
  { id: 'v074', type: 'vocabulary', category: 'Động từ', vietnamese: 'Ngủ', japanese: 'ねる', romaji: 'neru', level: 1 },

  // ── Tính từ ──
  { id: 'v075', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Lớn', japanese: 'おおきい', romaji: 'ookii', level: 1 },
  { id: 'v076', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Nhỏ', japanese: 'ちいさい', romaji: 'chiisai', level: 1 },
  { id: 'v077', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Mới', japanese: 'あたらしい', romaji: 'atarashii', level: 1 },
  { id: 'v078', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Cũ', japanese: 'ふるい', romaji: 'furui', level: 1 },
  { id: 'v079', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Tốt / Giỏi', japanese: 'いい', romaji: 'ii', level: 1 },
  { id: 'v080', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Xấu / Tệ', japanese: 'わるい', romaji: 'warui', level: 1 },
  { id: 'v081', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Nóng', japanese: 'あつい', romaji: 'atsui', level: 1 },
  { id: 'v082', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Lạnh', japanese: 'さむい', romaji: 'samui', level: 1 },
  { id: 'v083', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Đẹp', japanese: 'きれい', romaji: 'kirei', level: 1 },
  { id: 'v084', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Ngon', japanese: 'おいしい', romaji: 'oishii', level: 1 },
  { id: 'v085', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Vui', japanese: 'たのしい', romaji: 'tanoshii', level: 1 },
  { id: 'v086', type: 'vocabulary', category: 'Tính từ', vietnamese: 'Khó', japanese: 'むずかしい', romaji: 'muzukashii', level: 1 },

  // ── Đại từ & Chỉ định ──
  { id: 'v087', type: 'vocabulary', category: 'Đại từ & Chỉ định', vietnamese: 'Tôi', japanese: 'わたし', romaji: 'watashi', level: 1 },
  { id: 'v088', type: 'vocabulary', category: 'Đại từ & Chỉ định', vietnamese: 'Bạn', japanese: 'あなた', romaji: 'anata', level: 1 },
  { id: 'v089', type: 'vocabulary', category: 'Đại từ & Chỉ định', vietnamese: 'Anh ấy', japanese: 'かれ', romaji: 'kare', level: 1 },
  { id: 'v090', type: 'vocabulary', category: 'Đại từ & Chỉ định', vietnamese: 'Cô ấy', japanese: 'かのじょ', romaji: 'kanojo', level: 1 },
  { id: 'v091', type: 'vocabulary', category: 'Đại từ & Chỉ định', vietnamese: 'Cái này', japanese: 'これ', romaji: 'kore', level: 1 },
  { id: 'v092', type: 'vocabulary', category: 'Đại từ & Chỉ định', vietnamese: 'Cái đó', japanese: 'それ', romaji: 'sore', level: 1 },
  { id: 'v093', type: 'vocabulary', category: 'Đại từ & Chỉ định', vietnamese: 'Cái kia', japanese: 'あれ', romaji: 'are', level: 1 },
  { id: 'v094', type: 'vocabulary', category: 'Đại từ & Chỉ định', vietnamese: 'Ai', japanese: 'だれ', romaji: 'dare', level: 1 },

  // ── Địa điểm ──
  { id: 'v095', type: 'vocabulary', category: 'Địa điểm', vietnamese: 'Trường học', japanese: 'がっこう', romaji: 'gakkou', level: 1 },
  { id: 'v096', type: 'vocabulary', category: 'Địa điểm', vietnamese: 'Bệnh viện', japanese: 'びょういん', romaji: 'byouin', level: 1 },
  { id: 'v097', type: 'vocabulary', category: 'Địa điểm', vietnamese: 'Nhà ga', japanese: 'えき', romaji: 'eki', level: 1 },
  { id: 'v098', type: 'vocabulary', category: 'Địa điểm', vietnamese: 'Cửa hàng', japanese: 'みせ', romaji: 'mise', level: 1 },
  { id: 'v099', type: 'vocabulary', category: 'Địa điểm', vietnamese: 'Nhà hàng', japanese: 'レストラン', romaji: 'resutoran', level: 1 },
  { id: 'v100', type: 'vocabulary', category: 'Địa điểm', vietnamese: 'Công viên', japanese: 'こうえん', romaji: 'kouen', level: 1 },
  { id: 'v101', type: 'vocabulary', category: 'Địa điểm', vietnamese: 'Nhà', japanese: 'いえ', romaji: 'ie', level: 1 },
  { id: 'v102', type: 'vocabulary', category: 'Địa điểm', vietnamese: 'Khách sạn', japanese: 'ホテル', romaji: 'hoteru', level: 1 },
];

// ---------------------------------------------------------------------------
// Grammar — ~20 sentence patterns
// ---------------------------------------------------------------------------
export const GRAMMAR = [
  // ── Cơ bản ──
  { id: 'g001', type: 'grammar', category: 'Cơ bản', vietnamese: 'Tôi là sinh viên', japanese: '私は学生です', romaji: 'watashi wa gakusei desu', level: 1, pattern: '～は～です' },
  { id: 'g002', type: 'grammar', category: 'Cơ bản', vietnamese: 'Đây không phải là sách', japanese: 'これは本ではありません', romaji: 'kore wa hon dewa arimasen', level: 1, pattern: '～ではありません' },
  { id: 'g003', type: 'grammar', category: 'Cơ bản', vietnamese: 'Tôi thích cà phê', japanese: '私はコーヒーが好きです', romaji: 'watashi wa koohii ga suki desu', level: 1, pattern: '～が好きです' },
  { id: 'g004', type: 'grammar', category: 'Cơ bản', vietnamese: 'Tôi ăn cơm', japanese: '私はごはんを食べます', romaji: 'watashi wa gohan wo tabemasu', level: 1, pattern: '～を食べます' },
  { id: 'g005', type: 'grammar', category: 'Cơ bản', vietnamese: 'Tôi uống trà', japanese: '私はお茶を飲みます', romaji: 'watashi wa ocha wo nomimasu', level: 1, pattern: '～を飲みます' },
  { id: 'g006', type: 'grammar', category: 'Cơ bản', vietnamese: 'Tôi đi đến trường', japanese: '私は学校に行きます', romaji: 'watashi wa gakkou ni ikimasu', level: 1, pattern: '～に行きます' },
  { id: 'g007', type: 'grammar', category: 'Cơ bản', vietnamese: 'Tôi đến từ Việt Nam', japanese: '私はベトナムから来ました', romaji: 'watashi wa betonamu kara kimashita', level: 1, pattern: '～から来ました' },

  // ── Giao tiếp ──
  { id: 'g008', type: 'grammar', category: 'Giao tiếp', vietnamese: 'Tôi muốn nước', japanese: '私は水がほしいです', romaji: 'watashi wa mizu ga hoshii desu', level: 2, pattern: '～がほしいです' },
  { id: 'g009', type: 'grammar', category: 'Giao tiếp', vietnamese: 'Nhà vệ sinh ở đâu?', japanese: 'トイレはどこですか', romaji: 'toire wa doko desu ka', level: 2, pattern: '～はどこですか' },
  { id: 'g010', type: 'grammar', category: 'Giao tiếp', vietnamese: 'Cái này bao nhiêu tiền?', japanese: 'これはいくらですか', romaji: 'kore wa ikura desu ka', level: 2, pattern: '～はいくらですか' },
  { id: 'g011', type: 'grammar', category: 'Giao tiếp', vietnamese: 'Có cà phê không?', japanese: 'コーヒーがありますか', romaji: 'koohii ga arimasu ka', level: 2, pattern: '～がありますか' },
  { id: 'g012', type: 'grammar', category: 'Giao tiếp', vietnamese: 'Cùng ăn nào!', japanese: '食べましょう', romaji: 'tabemashou', level: 2, pattern: '～ましょう' },
  { id: 'g013', type: 'grammar', category: 'Giao tiếp', vietnamese: 'Tôi muốn đi Nhật Bản', japanese: '私は日本に行きたいです', romaji: 'watashi wa nihon ni ikitai desu', level: 2, pattern: '～たいです' },
  { id: 'g014', type: 'grammar', category: 'Giao tiếp', vietnamese: 'Tôi nghĩ là đẹp', japanese: 'きれいだと思います', romaji: 'kirei da to omoimasu', level: 2, pattern: '～と思います' },

  // ── Yêu cầu & Đề nghị ──
  { id: 'g015', type: 'grammar', category: 'Yêu cầu & Đề nghị', vietnamese: 'Xin cho tôi cái này', japanese: 'これをください', romaji: 'kore wo kudasai', level: 2, pattern: '～をください' },
  { id: 'g016', type: 'grammar', category: 'Yêu cầu & Đề nghị', vietnamese: 'Xin hãy đợi', japanese: '待ってください', romaji: 'matte kudasai', level: 2, pattern: '～てください' },
  { id: 'g017', type: 'grammar', category: 'Yêu cầu & Đề nghị', vietnamese: 'Xin đừng chạm vào', japanese: '触らないでください', romaji: 'sawaranaide kudasai', level: 3, pattern: '～ないでください' },
  { id: 'g018', type: 'grammar', category: 'Yêu cầu & Đề nghị', vietnamese: 'Tôi có thể ngồi đây được không?', japanese: 'ここに座ってもいいですか', romaji: 'koko ni suwattemo ii desu ka', level: 3, pattern: '～てもいいですか' },
  { id: 'g019', type: 'grammar', category: 'Yêu cầu & Đề nghị', vietnamese: 'Tôi có thể nói tiếng Nhật', japanese: '私は日本語を話すことができます', romaji: 'watashi wa nihongo wo hanasu koto ga dekimasu', level: 3, pattern: '～ことができます' },
  { id: 'g020', type: 'grammar', category: 'Yêu cầu & Đề nghị', vietnamese: 'Phải học bài', japanese: '勉強しなければなりません', romaji: 'benkyou shinakereba narimasen', level: 3, pattern: '～なければなりません' },
];
