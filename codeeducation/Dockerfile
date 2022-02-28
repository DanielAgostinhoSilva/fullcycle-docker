##### Stage 1 #####

FROM golang as builder

RUN mkdir -p /app
WORKDIR /app

COPY go.mod .

RUN go mod download

COPY *.go ./

RUN go build ./main.go

##### Stage 2 #####

FROM scratch

WORKDIR /app

COPY --from=builder /app/main .

CMD ["/app/main"]