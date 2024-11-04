/// <reference types="cypress" />

describe('Проверка главной страницы CompTIA', () => {
  beforeEach(() => {
    cy.visit('https://www.comptia.org');
  });

  it('Должен отображать заголовок страницы', () => {
    cy.title().should('include', 'CompTIA');
  });

  it('Кнопка "Get Started" должна быть кликабельна', () => {
    cy.contains('Get Started').should('be.visible').click();
    cy.url().should('include', '/certifications');
  });

  it('Навигационное меню должно содержать все основные разделы', () => {
    cy.get('nav').within(() => {
      cy.contains('Certifications').should('be.visible');
      cy.contains('Training').should('be.visible');
      cy.contains('Resources').should('be.visible');
      cy.contains('About').should('be.visible');
    });
  });
});
