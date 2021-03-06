App.ArticlesCreateController = Ember.Controller.extend({
    needs: ['articles'],
    actions: {
        createArticle: function() {

            var article = this.article;
            article.set('title', $(title).val());
            article.set('articleContent', $(articleContent).val());
            article.set('type', $('input[name=types]:checked').val());

            var self = this;

            function transitionToArticle(article) {
                self.transitionToRoute('articles.view', article);
            }

            function failure(reason) {
                // handle the error
                alert(reason);
            }

            article.save().then(transitionToArticle).
            catch (failure);
        }
    }
});


App.ArticlesEditController = Ember.Controller.extend({
    needs: ['articles'],
    actions: {
        editArticle: function() {
            var article = this.article;
            article.set('title', $(title).val());
            article.set('articleContent', $(articleContent).val());
            article.set('type', $('input[name=types]:checked').val());
            article.save();

            this.transitionToRoute('articles.view', article);
        }
    }
});

App.ArticlesController = Ember.Controller.extend({
    types: {
        'name' : 'types',
        'question' : 'Type',
        'choices' : [ 'Blog', 'Article', 'Newsflash'],
        'answer' : 'Blog'
    },
});