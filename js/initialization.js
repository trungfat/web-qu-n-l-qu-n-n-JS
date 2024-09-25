//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Ốc xào cà',
            img: './assets/img/products/ốc xào cà.jpg',
            category: 'Hải sản',
            price: 50000,
            desc: 'Không cao lương mỹ vị, cũng chẳng sang chảnh, đắt đỏ, ốc xào cà bắt miệng vô cùng.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Xụm lào',
            img: './assets/img/products/xụm lào.jpg',
            category: 'Món mặn',
            price: 100000,
            desc: 'Đảm bảo chuẩn vị Lào đậm đà cực ngonnnn. Mến mời khách nha.'
        },
        {
            id: 3,
            status: 1, 
            title: 'Gỏi cá trích',
            img: './assets/img/products/gỏi cá trích.jpg',
            category: 'Hải sản',
            price: 120000,
            desc: 'Từng miếng cá sống ngọt thanh chấm cùng nước sốt thơm ngon sẽ tạo nên một dư vị rất khó quên.'
        },
        {
            id: 4,
            status: 1, 
            title: 'Cá lăng kho tộ',
            img: './assets/img/products/cá lăng kho tộ.jpg',
            category: 'Hải sản',
            price: 119000,
            desc: 'Cá lăng kho có mùi thơm của riềng, gừng. Riềng gừng vừa hơi the the, lại hơi đắng nhẹ, lạ nhưng ngon vô cùng. Ăn với cơm nóng thì chỉ có trên cả tuyệt vời mà.'
        },
        {
            id: 5,
            status: 1, 
            title: 'Cháo sườn ngô đài loan',
            img: './assets/img/products/cháo sườn ngô đài loan.jpg',
            category: 'Món khác',
            price: 70000,
            desc: 'Cháo ngọt thơm, hạt gạo nở bung, gan bùi bùi, sườn đậm vị, ngô giòn ngọt, tất cả quyện hòa đa màu sắc, cuốn hút tín đồ ẩm thực từ cái nhìn đầu tiên.'
        },

        {
            id: 6,
            status: 1, 
            title: 'Ếch xào măng cay',
            img: './assets/img/products/ếch xào măng cay.jpg',
            category: 'Món mặn',
            price: 110000,
            desc: 'Thịt ếch dai ngon, măng chua giòn, thêm chút the cay từ ớt, thoảng mùi thơm từ hành lá, rau mùi tàu. Đậm đà bựa cơm'
        },

        {
            id: 7,
            status: 1, 
            title: 'Tôm rang lá chanh',
            category: 'Hải sản',
            img: './assets/img/products/tôm rang cháy cạnh.jpg',
            price: 150000,
            desc: 'ôm rang lá chanh đậm đà, giòn ngon, chắc thịt khiến ai ăn cùng cơm cũng thích'
        },

        {
            id: 8,
            status: 1, 
            title: 'Gà rang lá chanh',
            img: './assets/img/products/gà rang lá chanh.jpg',
            category: 'Món mặn',
            price: 200000,
            desc: 'Món gà rang thấm đầy đủ gia vị, lại thơm phức mùi lá chanh, hòa lẫn với vị gừng ấm áp, thịt gà săn chắc, da giòn sần sật.'
        },

        {
            id: 9,
            status: 1, 
            title: 'Dưa chua xào tóp mỡ',
            category: "Rau",
            img: './assets/img/products/dưa chua xào tóp mỡ.jpg',
            price: 40000,
            desc: 'Dưa chua xào tóp mỡ có vị chua chua, thơm nức lại giòn giòn, beo béo khiến bữa cơm ngày lạnh trở nên ngon miệng lạ thường.',
        },
        {
            id: 10,
            status: 1, 
            title: 'Sườn sụn om sấu',
            category: "Món ăn",
            img: './assets/img/products/sườn sụn om sấu.jpg',
            price: 250000,
            desc: ' sườn sụn om sấu chua có vị chua thanh mát của sấu, vị ngọt của sườn sụn non có thể thưởng thức trong mọi thời tiết và ngon nhất là trong ngày se se.',
        },
        {
            id: 11,
            status: 1, 
            title: 'Chả cá cuốn lá lốt',
            category: 'Món mặn',
            img: './assets/img/products/chả cá cuốn lá lốt.jpg',
            price: 80000,
            desc: 'Chả cá cuốn lá lốt có thể kèm nước chấm hoặc tương ớt tạo nên một món ăn đơn giản, ngon lành góp phần làm phong phú thêm bữa ăn cho cả gia đình.'
        },
        {
            id: 12,
            status: 1, 
            title: 'Mướp đắng',
            img: './assets/img/products/mướp đắng.jpg',
            category: 'Rau',
            price: 79000,
            desc: ' Mướp đắng xào trứng là món ăn kết hợp vị đắng nhẹ của mướp cùng với vị béo của trứng. Cho ra món ăn thanh đạm nhưng cung cấp đủ dinh dưỡng cho bữa ăn gia đình'
        },
        {
            id: 13,
            status: 1, 
            title: 'Mực xào giá',
            img: './assets/img/products/Mực xào giá.jpg',
            category: 'Hải sản',
            price: 189000,
            desc: 'Mực xào giá là một món xào ngon với hương vị kết hợp giữa mực giòn giòn và giá đỗ tươi mát giàu chất dinh dưỡng'
        },
        {
            id: 14,
            status: 1, 
            title: 'Canh cá nấu dưa chua',
            img: './assets/img/products/canh cá nấu dưa.jpg',
            category: 'Món canh',
            price: 89000,
            desc: 'Canh cá nấu dưa chua là món ăn phổ biến trong mâm cơm gia đình Việt, Vị chua chua từ dưa thật cuốn hút, thêm miếng thịt cá lại càng bổ dưỡng'
        },
        {
            id: 15,
            status: 1, 
            title: 'Sườn kho măng:',
            img: './assets/img/products/sườn kho măng.jpg',
            category: 'Món mặn',
            price: 129000,
            desc: 'Sườn mềm, có vị ngọt của đường, măng ngấm gia vị và bám mỡ từ sườn tiết ra. Cho món ra đĩa ăn cùng với cơm trắng bảo đảm cả nhà ăn ghiền hết sạch'
        },
        {
            id: 16,
            status: 1, 
            title: 'Cá ngừ kho tiêu:',
            img: './assets/img/products/cá ngừ kho tiêu.jpg',
            category: 'Hải sản',
            price: 189000,
            desc: 'Cá ngừ kho tiêu vừa thơm ngon lại giàu dinh dưỡng, giúp giữ ấm cơ thể vào mùa mưa. Món ăn này chính là sự lựa chọn lý tưởng cho thực đơn bữa cơm của nhà bạn'
        },
        {
            id: 17,
            status: 1, 
            title: 'Rau muống xào tỏi',
            img: './assets/img/products/rau muống xào.jpg',
            category: 'Rau',
            price: 60000,
            desc: 'Rau muống là loại rau quen thuộc trong bữa ăn của người Việt. Với vị đặc trưng ngọt, giòn, mát, được chế biến thành nhiều món ăn'
        },
        {
            id: 18,
            status: 1, 
            title: 'Đậu phụ sốt cà chua',
            img: './assets/img/products/đậu phụ sốt cà chua.jpg',
            category: 'Món mặn',
            price: 89000,
            desc: 'Đậu phụ sốt cà chua là một món ăn được coi là ăn mãi không chán trong bữa cơm hàng ngày'
        },
        {
            id: 19,
            status: 1, 
            title: 'Sườn rim tỏi ớt',
            img: './assets/img/products/sườn rim tỏi ớt.jpg',
            category: 'Món mặn',
            price: 159000,
            desc: 'Từng miếng sườn, ngọt thơm, cay nồng đậm đà chắc chắn sẽ đánh bay tô cơm nhà bạn'
        },
        {
            id: 20,
            status: 1, 
            title: 'Cá còm kho nghệ',
            img: './assets/img/products/cá còm.jpg',
            category: 'Hải sản',
            price: 139000,
            desc: 'Cá còm là loại cá nhỏ bằng ngón tay thường có rất nhiều ở các sông suối miền tây xứ Nghệ. Nhờ sự chế biến tài tình của người dân, cùng vị thơm ngon nên loại cá này nên giờ đây món cá còm đã trở thành đặc sản'
        },
        {
            id: 21,
            status: 1, 
            title: 'Sườn nạc rim mặn ngọt',
            category: 'Món mặn',
            img: './assets/img/products/Sườn nạc rim mặn ngọt.jpg',
            price: 120000,
            desc: 'Mềm ngấm nhiều sốt các bé thích'
        },
        {
            id: 22,
            status: 1, 
            title: 'Chả cáy',
            category: 'Món mặn',
            img: './assets/img/products/Chả cáy.jpg',
            price: 119000,
            desc: 'Thịt cáy chứa nhiều đạm được dùng để chế biến nhiều món ăn, trong đó chả cáy là món ngon được nhiều người ưa chuộng'
        },

        {
            id: 23,
            status: 1, 
            title: 'Tôm tít rang me',
            category: 'Hải sản',
            img: './assets/img/products/tôm tít rang me.jpg',
            price: 380000,
            desc: 'Món tôm tít rang me chua ngọt với vị ngọt tự nhiên của tôm hòa cùng vị chua chua ngọt ngọt của me vắt cùng các gia vị khác mang đến cho bạn món ăn ngon'
        },

        {
            id: 24,
            status: 1, 
            title: 'Lõi bò kho',
            img: './assets/img/products/Lõi bò kho.jpg',
            category: 'Món mặn',
            price: 110000,
            desc: 'Lõi bò kho tàu vị truyền thống sẽ càn quét nồi cơm của bạn.'
        },
        {
            id: 25,
            status: 1, 
            title: 'Bao tử cá ba sa',
            img: './assets/img/products/bao tử cá basa.jpg',
            category: 'Hải sản',
            price: 350000,
            desc: 'Bao tử cá basa xào cà hấp dẫn người ăn ở độ giòn sần sật của bao tử cá, quyện với vị ngọt thơm của cà'
        },

        {
            id: 26,
            status: 1, 
            title: 'Gà chiên mắm',
            category: 'Món mặn',
            img: './assets/img/products/gà chiên mắm.jpg',
            price: 450000,
            desc: ' Phần thịt gà với lớp vỏ giòn, thịt mềm thơm thấm đều gia vị đậm đà, thêm vào đó là một chút vị cay của ớt càng làm món ăn thêm dậy vị thơm ngon, kết hợp món ăn này cùng với cơm trắng sẽ rất phù hợp'
        },

        {
            id: 27,
            status: 1, 
            title: 'Bò xào đậu que:',
            category: 'Món mặn',
            img: './assets/img/products/bò xào.jpg',
            price: 120000,
            desc: 'Bò xào đậu que là một trong các món ngon từ thịt bò và cũng là món ngon mỗi ngày cho cả gia đình. Bò xào đậu que mềm vị thịt bò, ngọt giòn của đậu vị đậm đà đưa cơm'
        },

        {
            id: 28,
            status: 1, 
            title: 'Cá chim sốt tiêu',
            category: 'Hải sản',
            img: './assets/img/products/cá chim sốt.jpg',
            price: 150000,
            desc: 'Bữa trưa của bạn sẽ vô cùng hấp dẫn với món cá chim sốt tiêu ngon mê ly với thịt cá đậm đà, nước kho có vị cay nhẹ kích thích vị giác.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Cải ngồng',
            category: 'Rau',
            img: './assets/img/products/cải ngồng.jpg',
            price: 50000,
            desc: 'Cải ngồng hôm nay tươi ngọt luộc chấm nước mắm hoặc kho quẹt.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Cá trứng chiên giòn',
            category: 'Hải sản',
            img: './assets/img/products/Cá trứng.jpg',
            price: 175000,
            desc: 'Cá trứng chiên bột là những món ngon không thể thiếu trên bàn nhậu của các quý ông cũng như được yêu thích trong những bữa ăn sum họp gia đình, bạn bè.'
        },

        {
            id: 31,
            status: 1, 
            title: 'Vịt rang xả ớt',
            category: 'Món mặn',
            img: './assets/img/products/Vịt rang xả ớt.jpg',
            price: 350000,
            desc: 'Thịt vịt rang sả ớt với mùi thơm đặc trưng của sả, hành tím, thịt vịt thì mềm, vẫn giữ được độ ngọt, thấm gia vị. Với vị cay cay, mặn mặn, món này sẽ khiến bạn ăn hoài mà không thấy ngán đấy'
        },

        {
            id: 32,
            status: 1, 
            title: 'Cá cơm kho cay',
            category: 'Hải sản',
            img: './assets/img/products/Cá cơm kho cay.jpg',
            price: 160000,
            desc: 'Mặc dù có kích thước nhỏ nhưng cá cơm kho cay chắc chắn sẽ khiến vị giác của bạn bị “đánh gục” ngay từ miếng đầu tiên.'
        },

        {
            id: 33,
            status: 1, 
            title: 'Canh rong biển',
            category: 'Món canh',
            img: './assets/img/products/Canh rong biển.jpg',
            price: 70000,
            desc: 'Canh rong biển bổ dưỡng ngày giá rét'
        },

        {
            id: 34,
            status: 1, 
            title: 'Gân bò hầm khế',
            category: 'Món mặn',
            img: './assets/img/products/Gân bò hầm khế.jpg',
            price: 270000,
            desc: 'Gân bò hầm khế là một món ăn bổ dưỡng mang hương vị thơm ngon và hấp dẫn. Nó sẽ giúp cho bữa ăn gia đình của bạn thêm phong phú và ấm cúng'
        },

        {
            id: 35,
            status: 1, 
            title: 'Gà tần thuốc bắc hạt sen',
            category: 'Món mặn',
            img: './assets/img/products/Gà tần thuốc bắc.jpg',
            price: 300000,
            desc: 'là món ăn không thể thiếu vào những ngày giá rét'
        },

        {
            id: 36,
            status: 1, 
            title: 'Canh hến nấu chua',
            category: 'Món canh',
            img: './assets/img/products/Canh hến.jpg',
            price: 120000,
            desc: ' Vị ngọt của hến kết hợp với vị chua của khế tạo nên 1 món ăn tuyệt vời'
        },

        {
            id: 37,
            status: 1, 
            title: ' Đậu xào tôm',
            category: 'Rau',
            img: './assets/img/products/Đậu xào tôm.jpg',
            price: 180000,
            desc: 'Đậu cô ve xào tôm là món ăn dân dã, thường thấy trong bữa cơm gia đình. Món này các bạn chỉ nên xào chín tới để giữ được vị giòn ngọt tự nhiên của tôm và đậu.'
        },
        {
            id: 38,
            status: 1, 
            title: ' Canh ngao chua',
            category: 'Món canh',
            img: './assets/img/products/Canh ngao chua.jpg',
            price: 80000,
            desc: 'Bát canh ngao chua Nức lòng người ăn của Xưa đây ạ.'
        },
        {
            id: 39,
            status: 1, 
            title: 'Giò kho thịt',
            category: 'Món mặn',
            img: './assets/img/products/Giò kho.jpg',
            price: 100000,
            desc: 'Món giò kho thịt đậm đà thơm ngon ăn là ghiền sẽ giúp đổi thực đơn cho cả nhà mà đưa cơm vô cùng'
        },

        {
            id: 40,
            status: 1, 
            title: 'Canh rau mì tôm',
            category: 'Món canh',
            img: './assets/img/products/Canh rau mì tôm.jpg',
            price: 50000,
            desc: 'Tuổi thơ các bạn. Từng ăn canh rau nấu mì tôm chưa. Chưa thì hãy thử cùng xưa, rồi thì hãy ôn lại kỉ niệm'
        },

        {
            id: 41,
            status: 1, 
            title: 'Sụn non om khế',
            category: 'Món mặn',
            img: './assets/img/products/sụn non om khế.jpg',
            price: 150000,
            desc: 'Nồi sụn non om khế thanh mát lạ mà quen, có vị chua nhẹ của khế lẫn với  thịt sườn sụn mềm ngọt, thỉnh thoảng có miếng giòn giòn, trải nghiệm đầu thu thật thú vị'
        },
        {
            id: 42,
            status: 1, 
            title: 'Tôm cuốn rế',
            category: "Hải sản",
            img: './assets/img/products/Tôm cuốn rế.jpg',
            price: 299000,
            desc: 'Với vị thơm của tôm,hòa quyện với mùi tiêu,hành và vị giòn của bánh ram rớ ,ta có thể cảm giác được giòn rau ráu khi ăn tôm cuộn rế.',
        },
        {
            id: 43,
            status: 1, 
            title: 'Canh rau khoai nấu ruốc',
            category: "Món canh",
            img: './assets/img/products/Canh rau khoai nấu ruốc.jpg',
            price: 60000,
            desc: 'Xanh mướt, nhuận tràng',
        },
        {
            id: 44,
            status: 1, 
            title: 'Cá basa kho tiêu',
            category: "Hải sản",
            img: './assets/img/products/Cá basa kho tiêu.jpg',
            price: 220000,
            desc: 'Cá basa kho tiêu sẽ có màu vàng nâu đẹp mắt, thịt cá mềm mịn, thơm ngọt nhưng không bở, thấm nước sốt vô cùng đậm đà lại thêm chút cay nồng của tiêu và ớt hấp dẫn.',
        },
        {
            id: 45,
            status: 1, 
            title: 'Ngan nấu xáo măng',
            category: "Món mặn",
            img: './assets/img/products/Ngan xáo măng.jpg',
            price: 175000,
            desc: 'Trong thời tiết nóng ấm, món ăn mang tính hàn này sẽ góp phần hòa hòa và cân bằng cơ thể cho cả gia đình, rất tốt cho sức khỏe.',
        },
        {
            id: 46,
            status: 1, 
            title: 'Canh chua cá trắm',
            category: "Món canh",
            img: './assets/img/products/canh chua cá trắm.jpg',
            price: 75000,
            desc: '1 buồng trứng cá trắm cùng với canh chua vị ngon xuất sắc.',
        },
        {
            id: 47,
            status: 1, 
            title: 'Nhộng tằm',
            category: "Món mặn",
            img: './assets/img/products/Nhộng tằm.jpg',
            price: 170000,
            desc: ' Nhộng tằm vừa đủ độ béo, thơm ngon. Con mập con giòn',
        },
        {
            id: 48,
            status: 1, 
            title: 'Canh cua rau đay:',
            category: "Món canh",
            img: './assets/img/products/canh cua rau đay.jpg',
            price: 120000,
            desc: 'Một món canh mà không thể thiếu vào những ngày hè nóng bực.',
        },
        {
            id: 49,
            status: 1, 
            title: 'Canh chùm ngây',
            category: "Món canh",
            img: './assets/img/products/Canh chùm ngây.jpg',
            price: 80000,
            desc: 'Trong rau chùm ngây, hàm lượng vitamin C cao gấp 7 lần so với cam, vitamin A gấp 4 lần cà rốt, canxi gấp 4 lần sữa, sắt gấp 3 lần cải bó xôi, đạm nhiều gấp đôi sữa chua và potassium gấp 3 lần trái chuối. Thử kết hợp rau chùm ngây với thịt băm tạo thành món canh bổ dưỡng nhé.',
        },
        {
            id: 50,
            status: 1, 
            title: 'Chả mực rán',
            category: "Hải sản",
            img: './assets/img/products/chả mực rán.jpg',
            price: 70000,
            desc: 'Ngon từ thịt, ngọt từ ngoài vào trong',
        },
        {
            id: 51,
            status: 1, 
            title: 'Sữa đậu nành',
            category: "Nước uống",
            img: './assets/img/products/Sữa đậu.jpg',
            price: 15000,
            desc: 'Sữa đậu nành là một sản phẩm thực phẩm được làm từ đậu nành, một loại hạt được biết đến với giá trị dinh dưỡng cao và ít chất béo.',
        },
        {
            id: 52,
            status: 1, 
            title: 'Coca cola',
            category: "Nước uống",
            img: './assets/img/products/coca.jpg',
            price: 15000,
            desc: 'Coca-Cola là một trong những thương hiệu nước ngọt hàng đầu trên toàn cầu, được biết đến với hương vị đặc trưng và sự đa dạng trong sản phẩm. ',
        },
        {
            id: 53,
            status: 1, 
            title: 'Nước cam',
            category: "Nước uống",
            img: './assets/img/products/Nước cam.jpg',
            price: 30000,
            desc: 'Nước cam là một trong những loại nước ép trái cây phổ biến trên toàn thế giới với hương vị tươi mát và giàu vitamin C. ',
        },
        {
            id: 54,
            status: 1, 
            title: 'Trà chanh',
            category: "Nước uống",
            img: './assets/img/products/Trà chanh.jpg',
            price: 20000,
            desc: 'Trà chanh là một loại thức uống mát lạnh, thơm ngon và sảng khoái, đặc biệt phù hợp để thưởng thức vào mùa hè hoặc trong các buổi gặp gỡ bạn bè.',
        },
        {
            id: 55,
            status: 1, 
            title: 'Trà sâm dứa',
            category: "Nước uống",
            img: './assets/img/products/Trà sâm dứa.jpg',
            price: 15000,
            desc: 'Trà sâm dứa mang hương vị ngọt tự nhiên của trái dứa kết hợp với hương thơm dịu nhẹ của lá trà..',
        },
        {
            id: 56,
            status: 1, 
            title: 'Chè khúc bạch',
            category: "Món tráng miệng",
            img: './assets/img/products/Chè khúc bạch.jpg',
            price: 30000,
            desc: 'Chè khúc bạch là một món tráng miệng thú vị và bổ dưỡng, thường được thưởng thức vào mùa hè hoặc trong các dịp đặc biệt.',
        },
        {
            id: 57,
            status: 1, 
            title: 'Chè vải sen',
            category: "Món tráng miệng",
            img: './assets/img/products/chè vải sen.jpg',
            price: 35000,
            desc: 'Chè vải hạt sen không chỉ là một lựa chọn tráng miệng ngon miệng mà còn là một cách tuyệt vời để thưởng thức hương vị tự nhiên và tinh tế của trái cây Việt Nam.',
        },
        {
            id: 58,
            status: 1, 
            title: 'Sữa chua nếp cẩm',
            category: "Món tráng miệng",
            img: './assets/img/products/Sữa chua nếp cẩm.jpg',
            price: 20000,
            desc: 'Sữa chua nếp cẩm là một món tráng miệng truyền thống trong ẩm thực Việt Nam, món này kết hợp giữa sự mềm mịn của sữa chua và hương vị đặc trưng của nếp cẩm',
        },
        {
            id: 59,
            status: 1, 
            title: 'Kem ly',
            img: './assets/img/products/Kem ly.jpg',
            category: 'Món tráng miệng',
            price: 30000,
            desc: 'Kem không chỉ là một loại tráng miệng ngon mát mà còn là một phần không thể thiếu của nhiều loại món tráng miệng và thức uống.'
        },
        {
            id: 60,
            status: 1, 
            title: 'Dưa hấu',
            img: './assets/img/products/Dưa hấu.jpg',
            category: 'Món tráng miệng',
            price: 40000,
            desc: 'Dưa hấu là một loại quả nhiệt đới phổ biến và được ưa chuộng trên toàn thế giới.'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Lê Đức Trung",
            phone: "trungfat11",
            password: "123456",
            address: 'Vinh - Nghệ An',
            email: 'leductrung16052003@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Nguyễn Minh Thuận",
            phone: "nmt",
            password: "123456",
            address: 'Vĩnh Phúc',
            email: 'nmt15082003@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        }) 
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();