document.addEventListener('DOMContentLoaded', () => {


    // Budget slider logic
    const slider = document.getElementById('budget-slider');
    const budgetVal = document.getElementById('budget-value');

    function updateSliderFill(val) {
        const min = slider.min || 10000;
        const max = slider.max || 1000000;
        const percent = ((val - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, #C4A059 0%, #C4A059 ${percent}%, rgba(196, 160, 89, 0.1) ${percent}%, rgba(196, 160, 89, 0.1) 100%)`;
    }

    if (slider && budgetVal) {
        // Initialize fill
        updateSliderFill(slider.value);

        slider.addEventListener('input', function (e) {
            const val = parseInt(e.target.value);
            updateSliderFill(val);
            if (val >= 1000000) {
                budgetVal.textContent = '$1,000,000+';
            } else if (val >= 1000) {
                budgetVal.textContent = '$' + (val / 1000).toLocaleString() + 'k+';
            } else {
                budgetVal.textContent = '$' + val;
            }
        });
    }



    // Type button selection
    const typeBtns = document.querySelectorAll('.type-btn');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            typeBtns.forEach(b => {
                b.classList.remove('border-gold-dark');
                b.classList.remove('text-gold-light');
                b.classList.add('border-gold-dark/20');
                b.classList.add('text-gold-light/60');
            });
            btn.classList.add('border-gold-dark');
            btn.classList.add('text-gold-light');
            btn.classList.remove('border-gold-dark/20');
            btn.classList.remove('text-gold-light/60');
        });
    });

    // Calendar Logic
    const calendarGrid = document.getElementById('calendar-grid');
    const monthYearLabel = document.getElementById('calendar-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentDate = new Date();
    let selectedFullDate = null; // Store selected date persistently

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

        monthYearLabel.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);

        // Preserve Day Labels
        const dayLabels = `
            <span class="text-[9px] font-cinzel text-gold-dark/40 uppercase tracking-[0.2em]">Sun</span>
            <span class="text-[9px] font-cinzel text-gold-dark/40 uppercase tracking-[0.2em]">Mon</span>
            <span class="text-[9px] font-cinzel text-gold-dark/40 uppercase tracking-[0.2em]">Tue</span>
            <span class="text-[9px] font-cinzel text-gold-dark/40 uppercase tracking-[0.2em]">Wed</span>
            <span class="text-[9px] font-cinzel text-gold-dark/40 uppercase tracking-[0.2em]">Thu</span>
            <span class="text-[9px] font-cinzel text-gold-dark/40 uppercase tracking-[0.2em]">Fri</span>
            <span class="text-[9px] font-cinzel text-gold-dark/40 uppercase tracking-[0.2em]">Sat</span>
        `;
        calendarGrid.innerHTML = dayLabels;

        // Prev Month Days
        for (let i = firstDayOfMonth; i > 0; i--) {
            const day = lastDateOfPrevMonth - i + 1;
            calendarGrid.innerHTML += `<span class="text-xs text-gold-dark/20 font-cinzel">${day}</span>`;
        }

        // Current Month Days
        const today = new Date();
        for (let i = 1; i <= lastDateOfMonth; i++) {
            const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
            const isSelected = selectedFullDate && i === selectedFullDate.getDate() && month === selectedFullDate.getMonth() && year === selectedFullDate.getFullYear();

            let dayClass = isToday
                ? "text-xs text-gold-light py-2 border border-gold-dark/30 font-cinzel cursor-pointer hover:bg-gold-light hover:text-royal transition-all duration-300"
                : "text-xs text-gold-light hover:text-royal hover:bg-gold-light py-2 border border-transparent cursor-pointer transition-all duration-300 font-cinzel";

            if (isSelected) {
                dayClass += " bg-gold-dark text-royal font-bold";
            }

            calendarGrid.innerHTML += `<span class="calendar-day ${dayClass}" data-day="${i}">${i < 10 ? '0' + i : i}</span>`;
        }

        // Handle Selection
        const allDays = document.querySelectorAll('.calendar-day');
        allDays.forEach(day => {
            day.addEventListener('click', () => {
                const dayNum = parseInt(day.getAttribute('data-day'));
                selectedFullDate = new Date(year, month, dayNum);
                renderCalendar(); // Re-render to show selection clearly
            });
        });
    }

    if (calendarGrid) {
        renderCalendar();

        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }

    // Metal button selection & exclusive hover
    const metalBtns = document.querySelectorAll('.metal-btn');

    function clearAllMetalRings() {
        metalBtns.forEach(b => {
            const ring = b.querySelector('.ring-2');
            ring.classList.remove('ring-gold/50');
            ring.classList.add('ring-transparent');
        });
    }

    function setMetalRing(btn) {
        const ring = btn.querySelector('.ring-2');
        ring.classList.remove('ring-transparent');
        ring.classList.add('ring-gold/50');
    }

    metalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            metalBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            clearAllMetalRings();
            setMetalRing(btn);
        });

        btn.addEventListener('mouseenter', () => {
            clearAllMetalRings();
            setMetalRing(btn);
        });

        btn.addEventListener('mouseleave', () => {
            clearAllMetalRings();
            const active = document.querySelector('.metal-btn.active');
            if (active) setMetalRing(active);
        });
    });
    // Bespoke Brief Confirmation Logic
    const briefBtn = document.getElementById('confirm-brief-btn');
    const briefActionContainer = document.getElementById('brief-action-container');
    const briefSuccessStatus = document.getElementById('brief-success-status');
    const briefErrorMsg = document.getElementById('brief-error-message');

    const validateBespokeForm = () => {
        const jewellery = document.getElementById('select-jewellery')?.value;
        const narrative = document.getElementById('brief-narrative')?.value.trim();
        const metal = document.querySelector('.metal-btn.active');
        const gemstone = document.getElementById('select-gemstone')?.value;
        const timeline = document.getElementById('select-timeline')?.value;
        const dateSelected = selectedFullDate !== null;
        const name = document.getElementById('patron-name')?.value.trim();
        const mobile = document.getElementById('patron-mobile')?.value.trim();

        return jewellery && narrative && metal && gemstone && timeline && dateSelected && name && mobile;
    };

    if (briefBtn && briefSuccessStatus) {
        briefBtn.addEventListener('click', () => {
            if (!validateBespokeForm()) {
                briefErrorMsg.style.opacity = '1';
                briefBtn.classList.add('border-rose-500/50');
                setTimeout(() => {
                    briefErrorMsg.style.opacity = '0';
                    briefBtn.classList.remove('border-rose-500/50');
                }, 3000);
                return;
            }

            // Start transition
            briefActionContainer.style.opacity = '0';
            briefActionContainer.style.transform = 'translateY(20px)';
            briefActionContainer.style.pointerEvents = 'none';

            setTimeout(() => {
                briefActionContainer.classList.add('hidden');
                briefSuccessStatus.classList.remove('hidden');

                // Trigger visual reveal
                requestAnimationFrame(() => {
                    briefSuccessStatus.style.opacity = '1';
                    briefSuccessStatus.style.transform = 'scale(1)';
                });

                // Subtle scroll to confirmation
                briefSuccessStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 600);
        });
    }
});
