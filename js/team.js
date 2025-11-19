// Función para crear el HTML de un rider
function createRiderHTML(rider) {
    return `
        <div class="rider-item" data-rider-id="${rider.id}">
            <div class="rider-header">
                <span class="rider-name">${rider.name}</span>
                <span class="rider-toggle">+</span>
            </div>
            <div class="rider-content">
                <div class="rider-content-wrapper">
                    <div class="rider-photo-container">
                        <img src="${rider.photo}" alt="${rider.name}" class="rider-photo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="rider-photo-placeholder" style="display: none;">
                            Foto de ${rider.name}<br>
                            <small>Coloca la imagen en: ${rider.photo}</small>
                        </div>
                    </div>
                    <div class="rider-info">
                        <h2 class="rider-info-name">${rider.name}</h2>
                        <p class="rider-info-description">${rider.longDescription}</p>
                        <a href="#" class="rider-button">Ver más</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para inicializar el acordeón
function initAccordion() {
    const accordionContainer = document.getElementById('ridersAccordion');
    
    if (!accordionContainer) {
        console.error('No se encontró el contenedor del acordeón');
        return;
    }

    // Generar HTML para todos los riders
    const ridersHTML = ridersData.map(rider => createRiderHTML(rider)).join('');
    accordionContainer.innerHTML = ridersHTML;

    // Agregar event listeners a cada rider
    const riderItems = document.querySelectorAll('.rider-item');
    
    riderItems.forEach(item => {
        const header = item.querySelector('.rider-header');
        const toggle = item.querySelector('.rider-toggle');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los riders
            riderItems.forEach(riderItem => {
                riderItem.classList.remove('active');
                const riderToggle = riderItem.querySelector('.rider-toggle');
                riderToggle.textContent = '+';
            });
            
            // Si el rider clickeado no estaba activo, abrirlo
            if (!isActive) {
                item.classList.add('active');
                toggle.textContent = '–';
            }
        });
    });

    // Opción: Abrir el primer rider por defecto
    // Descomenta las siguientes líneas si quieres que el primer rider esté abierto al cargar:
    // if (riderItems.length > 0) {
    //     riderItems[0].classList.add('active');
    //     riderItems[0].querySelector('.rider-toggle').textContent = '–';
    // }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordion);
} else {
    initAccordion();
}

