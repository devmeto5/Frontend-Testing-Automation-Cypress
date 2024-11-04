/// <reference types="cypress" />

describe('CompTIA Homepage Test', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      // возвращаем false, чтобы Cypress не прерывал тесты
      return false;
    });
    cy.viewport(1280, 720);
    cy.visit('https://www.comptia.org');
  });

  it('Should display the correct page title', () => {
    cy.title().should('include', 'CompTIA');
  });

  it('Get Started button should be clickable', () => {
    cy.contains('Get Started').should('be.visible').click();
    cy.url().should('include', '/certifications');
  });

  it('Navigation menu should contain all main sections', () => {
    // Нажимаем на иконку меню, если она существует
    cy.get('button.menu-toggle').then(($menuButton) => {
      if ($menuButton.is(':visible')) {
        cy.wrap($menuButton).click();
      }
    });

    // Убедиться, что навигационное меню видно и содержит все основные разделы
    cy.get('nav.navbar_menu.w-nav-menu', { timeout: 20000 }).should('be.visible').within(() => {
      cy.contains('Certifications', { timeout: 20000 }).should('be.visible');
      cy.contains('Training', { timeout: 20000 }).should('be.visible');
      cy.contains('Resources', { timeout: 20000 }).should('be.visible');
      cy.contains('Career Changers', { timeout: 20000 }).should('be.visible');
    });
  });
});
