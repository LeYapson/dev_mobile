import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: Array(9).fill(null),
            currentPlayer: Math.random() < 0.5 ? 'X' : 'O', // Choix aléatoire du premier joueur
            winner: null,
            playerX: "Joueur 1",
            playerO: "Joueur 2",
            editingX: false,
            editingO: false,
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
            Alert.alert(`Victoire !`, `${this.getPlayerName(newWinner)} a gagné !`, [{ text: 'OK' }]);
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

    getPlayerName = (symbol) => {
        return symbol === 'X' ? this.state.playerX : this.state.playerO;
    };

    handleNameChange = (symbol, newName) => {
        if (symbol === 'X') {
            this.setState({ playerX: newName });
        } else {
            this.setState({ playerO: newName });
        }
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
                <View style={styles.playersContainer}>
                    {/* Carte Joueur X */}
                    <TouchableOpacity
                        style={[styles.playerCard, this.state.currentPlayer !== 'X' && styles.disabledCard]}
                        onPress={() => this.setState({ editingX: true })}
                    >
                        {this.state.editingX ? (
                            <TextInput
                                style={styles.input}
                                value={this.state.playerX}
                                onChangeText={(text) => this.handleNameChange('X', text)}
                                onBlur={() => this.setState({ editingX: false })}
                                autoFocus
                            />
                        ) : (
                            <Text style={styles.playerText}>{this.state.playerX}</Text>
                        )}
                    </TouchableOpacity>

                    {/* Carte Joueur O */}
                    <TouchableOpacity
                        style={[styles.playerCard, this.state.currentPlayer !== 'O' && styles.disabledCard]}
                        onPress={() => this.setState({ editingO: true })}
                    >
                        {this.state.editingO ? (
                            <TextInput
                                style={styles.input}
                                value={this.state.playerO}
                                onChangeText={(text) => this.handleNameChange('O', text)}
                                onBlur={() => this.setState({ editingO: false })}
                                autoFocus
                            />
                        ) : (
                            <Text style={styles.playerText}>{this.state.playerO}</Text>
                        )}
                    </TouchableOpacity>
                </View>

                <Text style={styles.turn}>Tour de : {this.getPlayerName(this.state.currentPlayer)}</Text>

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
    playersContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    playerCard: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        backgroundColor: '#007BFF',
        alignItems: 'center',
        borderRadius: 5,
    },
    disabledCard: {
        backgroundColor: '#A0A0A0',
    },
    playerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#fff',
        padding: 5,
        width: '90%',
        textAlign: 'center',
        borderRadius: 5,
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
        backgroundColor: '#FF5733',
        borderRadius: 5,
    },
    resetText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default TicTacToe;
