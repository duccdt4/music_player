/**
 * 1. Rander song
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / pre
 * 6. Random
 * 7. Next / repeat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 */
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const playList = $('.playlist')
const cd = $('.cd')
const name = $('h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const btnPlay = $('.btn-toggle-play')
const player = $('.player')
const btnNext = $('.btn-next')
const btnPrev = $('.btn-prev')
const progress = $('#progress')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [

        {
            name: '3107',
            singer: 'Wn-Duongg-Nâu',
            path: './asset/songs/3107-WnDuonggNau-6099150.mp3',
            image: './asset/image/3107_3.jpg'
        },
        {
            name: '3107-3',
            singer: 'Wn-Duongg-Nâu',
            path: './asset/songs/31073-WNDuonggNautitie-7059323.mp3',
            image: './asset/image/3107.jpg'
        },
        {
            name: 'Anh Mơ',
            singer: 'Anh Khang',
            path: './asset/songs/AnhMo-AnhKhang_3h79s.mp3',
            image: './asset/image/anh_mo.jpg'
        },
        {
            name: 'Bạch Nguyệt Quang Nốt Chu Sa',
            singer: 'Đại Tử',
            path: './asset/songs/BachNguyetQuangVaNotChuSa-DaiTuDaZi-6911991_hq.mp3',
            image: './asset/image/bach_nguyet_quang_not-chu_sa.jpg'
        },
        {
            name: 'Bước qua nhau',
            singer: 'Vũ',
            path: './asset/songs/BuocQuaNhau-Vu-7120388.mp3',
            image: './asset/image/buoc_qua_nhau.jpg'
        },
        {
            name: 'Chẳng thể với lấy',
            singer: 'Phạm Nguyên Ngọc',
            path: './asset/songs/Chang-The-Voi-Lay-Pham-Nguyen-Ngoc-B.mp3',
            image: './asset/image/chang_the_voi_lay.jpg'
        },
        {
            name: 'Chuyện người anh thương',
            singer: 'Phạm Nguyên Ngọc',
            path: './asset/songs/ChuyenNguoiAnhThuong-PhamNguyenNgoc-6054567.mp3',
            image: './asset/image/chuyen_nguoi_anh_thuong.jpg'
        },
        {
            name: 'Cô nương của cậu',
            singer: 'Lão Phàm Cách Cách',
            path: './asset/songs/CoNuongCuaCau-CachBichLaoPhanGeBiLaoFan-6040191.mp3',
            image: './asset/image/co_nuong_cua-cau.jpg'
        },
        {
            name: 'Giấc mơ có thật',
            singer: 'Lệ Quyên',
            path: './asset/songs/Giac-Mo-Co-That-Le-Quyen.mp3',
            image: './asset/image/giac-mo-co-that.jpg'
        },
        {
            name: 'Mùa hoa oải hương năm ấy',
            singer: 'Phạm hồng Phước',
            path: './asset/songs/Mua-Oai-Huong-Nam-Ay-Pham-Hong-Phuoc.mp3',
            image: './asset/image/hoa_oai_huong.jpg'
        },
        {
            name: 'Mùa hạ năm ấy',
            singer: 'Linh',
            path: './asset/songs/MuaHaNamAy-Linh-7030864.mp3',
            image: './asset/image/mua_ha_nam_ay.jpg'
        },
        {
            name: 'Hà Nội And You',
            singer: 'Đinh Đức Anh',
            path: './asset/songs/HanoiNU-DinhDucAnh-5765999.mp3',
            image: './asset/image/HN_and_you.jpg'
        },
        {
            name: 'Lạ',
            singer: 'Phạm Đình Thái Ngân',
            path: './asset/songs/La-Pham-Dinh-Thai-Ngan.mp3',
            image: './asset/image/la.jpg'
        },
        {
            name: 'Mưa tuyết',
            singer: 'Jack Việt Nam',
            path: './asset/songs/Mua-Tuyet-Jack-Viet-Nam.mp3',
            image: './asset/image/mua_tuyet.jpg'
        },
        {
            name: 'Nếu cuộc đời là một bộ phim',
            singer: 'Tạ Quang Thắng',
            path: './asset/songs/Neu-Cuoc-Doi-La-Mot-Bo-Phim-Ta-Quang-Thang.mp3',
            image: './asset/image/neu_cuoc_doi_la_mot_bo_phim.jpg'
        },
        {
            name: 'Nếu lúc trước em đừng tới',
            singer: 'Quang Vinh',
            path: './asset/songs/Neu-Luc-Truoc-Em-Dung-Toi-Quang-Vinh.mp3',
            image: './asset/image/neu_luc_truoc_em_dung_toi.jpg'
        },
        {
            name: 'Phong cảnh đời này đều liên quan đến em',
            singer: 'Lão Phàm Cách Cách',
            path: './asset/songs/Phong-canh-doi-nay-deu-lien-quan-den-em-Lao-Phan-Cach-Vach.mp3',
            image: './asset/image/phong_canh-doi_nay_deu_lien_quan_den_em.jpg'
        },
        {
            name: 'Thế giới lớn như vậy vẫn gặp được em',
            singer: 'Trịnh Hưởng',
            path: './asset/songs/The-Gioi-Lon-Nhu-Vay-Van-Gap-Duoc-Anh-Trinh-Huong.mp3',
            image: './asset/image/the_gioi_lon_nhu_vay_van_gap_duoc_em.jpg'
        },
        {
            name: 'Thành phố sương',
            singer: 'Hà Anh Tuấn',
            path: './asset/songs/ThanhPhoSuongSeeSingShare2-HaAnhTuan-5081257.mp3',
            image: './asset/image/thanh_pho_suong2.jpg'
        },
        {
            name: 'Vâng trăng cô đơn',
            singer: 'Chi Dân',
            path: './asset/songs/Vang-Trang-Co-Don-Chi-Dan.mp3',
            image: './asset/image/vang_trang-co_don.jpg'
        },
        {
            name: 'Vội vàng',
            singer: 'Tạ Quang Thắng',
            path: './asset/songs/Voi-Vang-Ta-Quang-Thang.mp3',
            image: './asset/image/voi_vang.jpg'
        },
        {
            name: 'Đồng Thoại',
            singer: 'Quang Lương',
            path: './asset/songs/Dong-Thoai-Quang-Luong.mp3',
            image: './asset/image/dong_thoai.jpg'
        },
        {
            name: 'Xuân thì',
            singer: 'Hà Anh Tuấn',
            path: './asset/songs/XuanThi-HaAnhTuan-6803648.mp3',
            image: './asset/image/xuan_thi.jpg'
        },
        {
            name: 'Muốn có trái tim một người',
            singer: 'Luân Tang',
            path: './asset/songs/Muon-Co-Trai-Tim-Mot-Nguoi-Luan-Tang.mp3',
            image: './asset/image/muon_co_trai_tim_1_nguoi.jpg'
        }
    ],

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvent: function () {
        const cdWidth = cd.offsetWidth
        const _this = this
        const cdAnimation = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdAnimation.pause()
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const cdNewWidth = cdWidth - scrollTop
            cd.style.width = cdNewWidth > 0 ? cdNewWidth + 'px' : 0
        }
        btnPlay.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        audio.onplay = function () {
            _this.isPlaying = true
            player.classList.add('playing')
            cdAnimation.play()
        }
        audio.onpause = function () {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdAnimation.pause()

        }
        audio.ontimeupdate = function () {
            const timePercent = Math.floor(audio.currentTime / audio.duration * 100)
            progress.value = timePercent > 0 ? timePercent : 0
        }
        progress.oninput = function () {
            setTimeout(() => {
                audio.play()
            }, 300)
            const seekTime = progress.value / 100 * audio.duration
            audio.currentTime = seekTime;
        }
        btnNext.onclick = function () {
            _this.nextSong()
            audio.play()
        }
        btnPrev.onclick = function () {
            _this.prevSong()
            audio.play()
        }
        btnRandom.onclick = function () {
            _this.isRandom = !_this.isRandom
            btnRandom.classList.toggle('active', _this.isRandom)
        }
        btnRepeat.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            btnRepeat.classList.toggle('active', _this.isRepeat)
        }
        audio.onended = function () {
            if (_this.isRepeat) {
                _this.loadCurrentSong()
                audio.play()
            } else {
                _this.nextSong()
                audio.play()
            }
        }
        playList.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            const optionNode = e.target.closest('.option')
            if (songNode || optionNode) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                }
                if (optionNode) {

                }
            }
        }
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            if (this.currentIndex === 0 || this.currentIndex === 1) {
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                })
            } else {
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'nearest'
                })
            }
        }, 300)
    },

    randomSong: function () {
        this.currentIndex = Math.floor(Math.random() * this.songs.length)
        this.loadCurrentSong()
    },
    nextSong: function () {
        if (this.isRandom) {
            this.randomSong()
        } else {

            this.currentIndex++
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0
            }
            this.loadCurrentSong()
        }
        this.render()
        this.scrollToActiveSong()
    },
    prevSong: function () {
        if (this.isRandom) {
            this.randomSong()
        } else {
            this.currentIndex--
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1
            }
            this.loadCurrentSong()
        }
        this.render()
        this.scrollToActiveSong()

    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                <div data-index="${index}" class="song ${index === this.currentIndex ? 'active' : ''}">
                    <div class="thumb"
                        style="background-image: url(${song.image})">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        playList.innerHTML = htmls.join()
    },
    loadCurrentSong: function () {
        name.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url(${this.currentSong.image})`
        audio.src = this.currentSong.path
    },
    start: function () {
        this.handleEvent()
        this.defineProperties()
        this.render()
        this.loadCurrentSong()
    }
}
app.start()

