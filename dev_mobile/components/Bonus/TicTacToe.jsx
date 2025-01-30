import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            currentPlayer: Math.random() < 0.5 ? 'X' : 'O', // Choix aléatoire du premier joueur
            winner: null,
        };
    }

    handlePress = (index) => {
        const { board, currentPlayer, winner } = this.state;

        if (board[index] || winner) return; // Case déjà prise ou jeu terminé

        // Met à jour le plateau
        const newBoard = [...board];
        newBoard[index] = currentPlayer;

        // Vérifie s'il y a un gagnant
        const newWinner = this.checkWinner(newBoard);

        this.setState({
            board: newBoard,
            currentPlayer: newWinner ? null : currentPlayer === 'X' ? 'O' : 'X',
            winner: newWinner,
        });

        // Affichage du gagnant ou match nul
        if (newWinner) {
            Alert.alert(`Victoire !`, `Le joueur ${newWinner} a gagné !`, [{ text: 'OK' }]);
        } else if (!newBoard.includes(null)) {
            Alert.alert(`Égalité !`, `La partie est terminée sans vainqueur.`, [{ text: 'OK' }]);
        }
    };

    checkWinner(board) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
            [0, 4, 8], [2, 4, 6] // Diagonales
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]; // Retourne 'X' ou 'O' si gagnant
            }
        }
        return null;
    }

    resetGame = () => {
        this.setState({
            board: Array(9).fill(null),
            currentPlayer: Math.random() < 0.5 ? 'X' : 'O',
            winner: null,
        });
    };

    renderSquare = (index) => {
        return (
            <TouchableOpacity style={styles.square} onPress={() => this.handlePress(index)}>
                <Text style={styles.symbol}>{this.state.board[index]}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Morpion</Text>
                <Text style={styles.turn}>Tour du joueur : {this.state.currentPlayer}</Text>
                
                <View style={styles.board}>
                    {this.state.board.map((_, index) => this.renderSquare(index))}
                </View>

                <TouchableOpacity style={styles.resetButton} onPress={this.resetGame}>
                    <Text style={styles.resetText}>Réinitialiser</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    turn: {
        fontSize: 18,
        marginBottom: 10,
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
    },
    square: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#333',
        backgroundColor: '#fff',
    },
    symbol: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    resetButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    resetText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default TicTacToe;
