// nineSystems.js - Modern JavaScript for nineSystems website

class NineSystems {
  constructor() {
    this.init();
  }

  init() {
    this.cacheElements();
    this.setupEventListeners();
    this.setupHoverEffects();
  }

  cacheElements() {
    this.elements = {
      aboutBtn: document.getElementById('aboutBtn'),
      contactBtn: document.getElementById('contactBtn'),
      aboutContent: document.getElementById('aboutContent'),
      contactContent: document.getElementById('contactContent'),
      categoryCards: document.querySelectorAll('.category-card'),
      allContentCards: document.querySelectorAll('.content-card')
    };
  }

  setupEventListeners() {
    // Button click handlers
    this.elements.aboutBtn.addEventListener('click', (e) => this.toggleContent(e, this.elements.aboutContent));
    this.elements.contactBtn.addEventListener('click', (e) => this.toggleContent(e, this.elements.contactContent));
    
    // Close content when clicking outside
    document.addEventListener('click', () => this.closeAllContent());
    
    // Prevent content close when clicking inside content
    this.elements.allContentCards.forEach(card => {
      card.addEventListener('click', (e) => e.stopPropagation());
    });
  }

  setupHoverEffects() {
    this.elements.categoryCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }

  toggleContent(event, contentElement) {
    event.stopPropagation();
    
    // Close all other content first
    this.closeAllContent();
    
    // Toggle the requested content
    contentElement.style.display = contentElement.style.display === 'block' ? 'none' : 'block';
    
    // Update button icon
    this.updateButtonIcon(event.currentTarget);
  }

  closeAllContent() {
    this.elements.allContentCards.forEach(card => {
      card.style.display = 'none';
    });
    
    // Reset all button icons
    document.querySelectorAll('.modern-btn i').forEach(icon => {
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
    });
  }

  updateButtonIcon(button) {
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
  }
}

// Category functions
function showCategory(category) {
  // This would be expanded to load actual content
  console.log(`Loading content for: ${category}`);
  
  // For demo purposes - would be replaced with actual content loading
  const categoryData = {
    'products': 'Electronics, Computers, Accessories',
    'lectures': 'Programming tutorials, Tech courses',
    'posts': 'Tech news, Company updates',
    'others': 'Services, Support, FAQs'
  };
  
  alert(`Showing ${category} section:\n${categoryData[category]}`);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NineSystems();
});
