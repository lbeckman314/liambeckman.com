#lang racket
(require web-server/templates)
(require markdown)

(define (template head header-menu content footer)
  (include-template "_layouts/my-default.html"))

;(for ([f (in-directory ".")] #:when (equal? (path-get-extension f) #".md"))
;     (displayln f))

(define xs (parse-markdown (file->string "about/index.md")))

(display (template (file->string "_includes/head.html")
                   (file->string "_includes/header-menu.html")
                   (xexpr->string `(div ,@xs))
                   (file->string "_includes/footer.html")))

